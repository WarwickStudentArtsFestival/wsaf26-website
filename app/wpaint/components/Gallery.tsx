 'use client';

import React, { useEffect, useState } from 'react';

const Gallery: React.FC = () => {
  const [imageFilenames, setImageFilenames] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    // @ts-ignore
    const modules = import.meta.glob('/src/assets/wpaint-gallery/*.{png,jpg,jpeg,webp,gif}', { eager: true, as: 'url' }) as Record<string, string>;
    const urls = Object.values(modules || {});
    setImageFilenames(shuffleArray(urls));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 bg-black lg:grid-cols-2 gap-4 p-4">
        {imageFilenames.map((filename, index) => (
          <div
            key={index}
            className="relative w-full cursor-pointer hover:scale-[1.01] transition-transform"
            onClick={() => setSelected(index)}
          >
            <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden shadow">
              <img
                src={filename}
                alt={`Canvas ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[90%] max-w-4xl aspect-video">
            <img
              src={imageFilenames[selected]}
              alt={`Canvas ${selected + 1}`}
              className="absolute inset-0 w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;