import React from 'react';
import NextImage, { StaticImageData } from 'next/image';

export type StampType = 'mask' | 'trumpet' | 'microphone' | 'paintbrush' | 'shoes';

export interface StampOption {
  type: StampType;
  label: string;
  icon: string | StaticImageData;
}

interface StampPickerProps {
  stampOptions: StampOption[];
  selectedStamp: StampType | null;
  onSelectStamp: (stamp: StampType | null) => void;
}

const StampPicker: React.FC<StampPickerProps> = ({
  stampOptions,
  selectedStamp,
  onSelectStamp,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-md bg-white p-2">
      <span className="block text-xl font-medium text-black">Stamps:</span>
      {stampOptions.map((stamp) => {
        const isActive = selectedStamp === stamp.type;
        return (
          <button
            key={stamp.type}
            type="button"
            onClick={() => onSelectStamp(isActive ? null : stamp.type)}
            aria-label={stamp.label}
            aria-pressed={isActive}
            title={stamp.label}
            className={`flex h-12 w-12 items-center justify-center border-2 border-black transition-colors ${
              isActive ? 'rounded-square bg-[#ffbd00]' : 'rounded-full bg-white'
            }`}
          >
            <NextImage
              src={stamp.icon}
              alt=""
              width={36}
              height={36}
              className="pointer-events-none"
            />
          </button>
        );
      })}
    </div>
  );
};

export default StampPicker;
