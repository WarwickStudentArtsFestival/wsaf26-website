import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import type { BrushType } from './BrushTypePicker';

export interface CanvasProps {
  color: string;
  brushSize: number;
  brushType: BrushType;
  stampSrc: string | null;
  onDraw?: () => void;
}

export interface CanvasRef {
  undo: () => void;
}

const Canvas = forwardRef<CanvasRef, CanvasProps>(
  ({ color, brushSize, brushType, stampSrc, onDraw }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const dashOffsetRef = useRef(0);
    const stampCacheRef = useRef<Record<string, HTMLImageElement>>({});
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState<{ x: number; y: number }>({
      x: 0,
      y: 0,
    });
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [history, setHistory] = useState<ImageData[]>([]);

    const resizeCanvas = useCallback(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { clientWidth, clientHeight } = canvas;

        if (
          canvasSize.width !== clientWidth ||
          canvasSize.height !== clientHeight
        ) {
          setCanvasSize({ width: clientWidth, height: clientHeight });
          canvas.width = clientWidth;
          canvas.height = clientHeight;

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    }, [canvasSize]);

    useEffect(() => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('mouseup', () => setIsDrawing(false));
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mouseup', () => setIsDrawing(false));
      };
    }, [resizeCanvas]);

    useEffect(() => {
      if (stampSrc) {
        setIsDrawing(false);
      }
    }, [stampSrc]);

    const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };
      if ('touches' in e) {
        const touch = e.touches[0];
        return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      }
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const saveHistory = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistory((prev) => [...prev, data]);
      }
    };

    const loadStampImage = useCallback(async (src: string) => {
      const cached = stampCacheRef.current[src];
      if (cached && cached.complete) {
        return cached;
      }

      const image = cached ?? new Image();
      stampCacheRef.current[src] = image;

      if (!cached) {
        image.src = src;
      }

      if (image.complete) {
        return image;
      }

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () => reject(new Error('Failed to load stamp image'));
      });

      return image;
    }, []);

    const placeStamp = useCallback(
      async (x: number, y: number) => {
        if (!canvasRef.current || !stampSrc) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        saveHistory();

        try {
          const image = await loadStampImage(stampSrc);
          const stampSize = Math.max(40, brushSize * 2);
          ctx.drawImage(
            image,
            x - stampSize / 2,
            y - stampSize / 2,
            stampSize,
            stampSize,
          );
          onDraw?.();
        } catch {
          // Ignore stamp draw failures so brush drawing still works.
        }
      },
      [brushSize, loadStampImage, onDraw, stampSrc],
    );

    const undo = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && history.length > 0) {
        const newHistory = [...history];
        const last = newHistory.pop();
        setHistory(newHistory);
        if (last) ctx.putImageData(last, 0, 0);
      }
    };

    useImperativeHandle(ref, () => ({ undo }));

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
      const { x, y } = getPosition(e);

      if (stampSrc) {
        setIsDrawing(false);
        void placeStamp(x, y);
        e.preventDefault();
        return;
      }

      saveHistory();
      setIsDrawing(true);
      setLastPos({ x, y });
      dashOffsetRef.current = 0;
      e.preventDefault();
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
      if (stampSrc) {
        e.preventDefault();
        return;
      }

      if (!isDrawing || !canvasRef.current) return;
      const { x, y } = getPosition(e);
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const deltaX = x - lastPos.x;
        const deltaY = y - lastPos.y;
        const segmentLength = Math.hypot(deltaX, deltaY);
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(x, y);
        ctx.lineWidth = brushSize;
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        let dashPattern: number[] = [];
        if (brushType === 'dotted') {
          dashPattern = [1, brushSize * 1.8];
        } else if (brushType === 'dashed') {
          dashPattern = [brushSize * 2.5, brushSize * 3];
        }

        ctx.setLineDash(dashPattern);
        if (dashPattern.length > 0) {
          const patternLength = dashPattern.reduce((sum, part) => sum + part, 0);
          ctx.lineDashOffset = -dashOffsetRef.current;
          dashOffsetRef.current =
            (dashOffsetRef.current + segmentLength) % patternLength;
        } else {
          ctx.lineDashOffset = 0;
        }

        ctx.stroke();
      }
      setLastPos({ x, y });
      e.preventDefault();
    };

    return (
      <canvas
        ref={canvasRef}
        className="border border-black aspect-video w-full h-full"
        style={{ touchAction: 'none' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={() => setIsDrawing(false)}
        onTouchCancel={() => setIsDrawing(false)}
      />
    );
  },
);

Canvas.displayName = 'Canvas';
export default Canvas;
