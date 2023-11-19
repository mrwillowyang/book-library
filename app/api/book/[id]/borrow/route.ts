import { borrowBook } from 'app/db/borrow-book';
import { NextResponse } from 'next/server';

export async function PATCH(
  _: Request,
  { params }: { params: { id: number } }
) {
  // delay 2 seconds to show the loading state on the page
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000));

  await borrowBook(params.id);
  return NextResponse.json({ status: 'ok' });
}
