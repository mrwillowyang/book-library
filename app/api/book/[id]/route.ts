import { deleteBook } from 'app/db/delete-book';
import { NextResponse } from 'next/server';

export async function DELETE(
  _: Request,
  { params }: { params: { id: number } }
) {
  // delay 2 seconds to show the loading state on the page
  // await new Promise((resolve) => setTimeout(() => resolve(true), 2000));

  await deleteBook(params.id);

  return NextResponse.json({ status: 'ok' });
}
