import { deleteBook } from 'app/db/delete-book';
import { rateLimit } from 'app/utils/rate-limit';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (process.env.SLOW_API_DEBUG && process.env.SLOW_API_DEBUG === 'true') {
    // delay 2 seconds to show the loading state on the page
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  }

  return rateLimit(request, async () => {
    await deleteBook(params.id);
    return NextResponse.json({ status: 'ok' });
  });
}
