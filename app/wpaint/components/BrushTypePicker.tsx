import React from 'react';
import { FiMinus, FiMoreHorizontal } from 'react-icons/fi';

export type BrushType = 'solid' | 'dotted' | 'dashed';

interface BrushTypePickerProps {
  brushType: BrushType | null;
  onBrushTypeChange: (type: BrushType) => void;
}

const BrushTypePicker: React.FC<BrushTypePickerProps> = ({
  brushType,
  onBrushTypeChange,
}) => {
  const brushOptions: { type: BrushType; label: string; icon: React.ReactNode }[] = [
    { type: 'solid', label: 'Solid brush', icon: <FiMinus className="h-6 w-6" /> },
    {
      type: 'dotted',
      label: 'Dotted brush',
      icon: <FiMoreHorizontal className="h-6 w-6" />,
    },
    {
      type: 'dashed',
      label: 'Dashed brush',
      icon: (
        <span className="text-xl leading-none tracking-[0.05em]" aria-hidden>
          ---
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center space-x-3">
      <label className="block text-xl font-medium text-black">
        Brush Type:
      </label>
      <div className="flex items-center">
      {brushOptions.map((option) => (
        <button
          key={option.type}
          type="button"
          aria-label={option.label}
          aria-pressed={brushType === option.type}
          onClick={() => onBrushTypeChange(option.type)}
          className={`flex h-12 w-12 items-center justify-center m-1 sm:m-2 border-2 border-black text-black transition-colors ${
            brushType === option.type ? 'bg-[#ffbd00] rounded-square' : 'bg-white rounded-full'
          }`}
        >
          {option.icon}
        </button>
      ))}
      </div>
    </div>
  );
};

export default BrushTypePicker;
