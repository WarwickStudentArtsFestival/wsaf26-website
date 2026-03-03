import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export const runtime = 'edge';

// Purge cache for any pages which use schedule.json
async function handle(): Promise<NextResponse> {
  await (revalidateTag as any)('pretalx-schedule');
  await revalidatePath('/events');
  await revalidatePath('/events/[slug]', 'page');
  await revalidatePath('/venues');
  await revalidatePath('/venues/[slug]', 'page');

  console.log('Purging cache for /events and /venues pages');

  return NextResponse.json({
    success: true,
    message: 'Cache purged for /events and /venues pages',
  });
}

export async function GET() {
  return handle();
}

export async function POST() {
  return handle();
}

export async function DELETE() {
  return handle();
}
