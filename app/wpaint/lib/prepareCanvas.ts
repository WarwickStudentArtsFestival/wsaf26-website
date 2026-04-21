import toast from 'react-hot-toast';
import Paintbrush from '@/assets/icons/paintbrush.png';

const resolveImageSrc = (image: unknown): string | null => {
  if (!image) return null;
  if (typeof image === 'string') return image;

  if (typeof image === 'object') {
    const asRecord = image as Record<string, unknown>;
    if (typeof asRecord.src === 'string') return asRecord.src;

    const defaultExport = asRecord.default;
    if (typeof defaultExport === 'string') return defaultExport;
    if (
      defaultExport &&
      typeof defaultExport === 'object' &&
      typeof (defaultExport as Record<string, unknown>).src === 'string'
    ) {
      return (defaultExport as Record<string, string>).src;
    }
  }

  return null;
};

export const prepareCanvasImage = async (
  caption: string,
  author: string,
): Promise<FormData | null> => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  if (!canvas) {
    toast.error('Canvas not found');
    return null;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    toast.error('Canvas context not available');
    return null;
  }

  const paintbrushSrc = resolveImageSrc(Paintbrush);

  return new Promise((resolve) => {
    const createFormData = (paintbrushImg?: HTMLImageElement) => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const sendCanvas = document.createElement('canvas');
      const sendCtx = sendCanvas.getContext('2d');
      if (!sendCtx) {
        toast.error('Unable to create canvas for sending to Discord');
        return resolve(null);
      }

      sendCanvas.width = canvas.width;
      sendCanvas.height = canvas.height;

      sendCtx.putImageData(imageData, 0, 0);

      if (paintbrushImg) {
        const scale = Math.min(canvas.width, canvas.height) / paintbrushImg.width;
        const brushX = sendCanvas.width - paintbrushImg.width * 0.1 * scale - 10;
        const brushY =
          sendCanvas.height - paintbrushImg.height * 0.1 * scale - 10;

        sendCtx.save();
        sendCtx.translate(brushX, brushY);
        sendCtx.rotate((120 * Math.PI) / 180);
        sendCtx.scale(scale, scale);
        sendCtx.drawImage(
          paintbrushImg,
          -paintbrushImg.width / 2,
          -paintbrushImg.height / 2,
        );
        sendCtx.restore();
      }

      sendCanvas.toBlob((blob) => {
        if (!blob) {
          toast.error('Failed to get image blob');
          return resolve(null);
        }

        const formData = new FormData();
        formData.append('file', blob, 'canvas.png');
        formData.append('caption', caption || 'Untitled');
        formData.append('author', author || 'Unknown');

        resolve(formData);
      }, 'image/png');
    };

    if (!paintbrushSrc) {
      createFormData();
      return;
    }

    const paintbrushImg = new window.Image();
    paintbrushImg.onload = () => createFormData(paintbrushImg);
    paintbrushImg.onerror = () => createFormData();
    paintbrushImg.src = paintbrushSrc;
  });
};
