import PaintApp from '@/app/wpaint/components/paint-app';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W-Paint 2.0',
};

export default function WPaint() {
  return <PaintApp />;
}
