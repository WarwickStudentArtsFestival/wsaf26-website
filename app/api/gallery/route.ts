import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/wpaint-gallery');
  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file));
  return NextResponse.json({ files });
}
