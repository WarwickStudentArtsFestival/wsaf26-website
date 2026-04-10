"use client";

import type { StaticImageData } from 'next/image';
import type { MouseEvent } from 'react';

export function LogoDownload({
  image,
  name,
  size,
  style,
  href,
}: {
  image: StaticImageData | string;
  name: string;
  size?: string;
  style?: string;
  href?: string;
}) {
  const imageSrc =
    typeof image === 'string' ? image : 'src' in image ? image.src : undefined;
  const linkHref = href || imageSrc;

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (href || !imageSrc) return;

    event.preventDefault();

    const filename = imageSrc.split('/').pop() || `${name}.png`;

    try {
      const response = await fetch(imageSrc);
      if (!response.ok) throw new Error(`Download failed: ${response.status}`);

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      const fallback = document.createElement('a');
      fallback.href = imageSrc;
      fallback.download = filename;
      document.body.appendChild(fallback);
      fallback.click();
      fallback.remove();
    }
  };

  return (
    <div className={`${size || 'max-w-96 w-56'} flex-grow`}>
      <p className="text-xs mb-1 text-slate-800">{name}</p>
      <a
        href={linkHref || '#'}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        onClick={handleClick}
        className={`block hover:scale-105 transition duration-100 ${style}`}
      >
        {imageSrc ? <img src={imageSrc} alt={name} className="w-full h-auto" /> : null}
      </a>
    </div>
  );
}