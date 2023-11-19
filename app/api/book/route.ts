import { addBook } from 'app/db/add-book';
import { getBooks } from 'app/db/get-books';
import { NextResponse } from 'next/server';

export async function GET() {
  // delay 2 seconds to show the loading state on the page
  // await new Promise((resolve) => setTimeout(() => resolve(true), 2000));

  const books = await getBooks();
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  // delay 2 seconds to show the loading state on the page
  // await new Promise((resolve) => setTimeout(() => resolve(true), 2000));

  const book = await req.json();
  const id = await addBook(book);

  return NextResponse.json({ id });
}
