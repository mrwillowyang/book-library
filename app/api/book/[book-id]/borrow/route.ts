import { borrowBook } from 'app/db/borrow-book';
import { NextResponse } from 'next/server';

export async function PATCH(
  _: Request,
  { params }: { params: { 'book-id': number } }
) {
  // delay 2 seconds to show the loading state on the page
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  console.log('book id', params['book-id']);
  await borrowBook(params['book-id']);
  return NextResponse.json({ status: 'ok' });
}
