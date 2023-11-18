import { books } from 'app/data/books';
import { NextResponse } from 'next/server';

export async function GET() {
  // delay 2 seconds to show the loading state on the page
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000));

  return NextResponse.json(books);
}
