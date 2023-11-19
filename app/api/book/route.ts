import { addBook } from 'app/db/add-book';
import { getBooks } from 'app/db/get-books';
import { rateLimit } from 'app/utils/rate-limit';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  if (process.env.SLOW_API_DEBUG && process.env.SLOW_API_DEBUG === 'true') {
    // delay 2 seconds to show the loading state on the page
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  }

  return rateLimit(request, async () => {
    const books = await getBooks();
    return NextResponse.json(books);
  });
}

export async function POST(request: NextRequest) {
  if (process.env.SLOW_API_DEBUG && process.env.SLOW_API_DEBUG === 'true') {
    // delay 2 seconds to show the loading state on the page
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  }
  return rateLimit(request, async () => {
    const book = await request.json();
    const id = await addBook(book);

    return NextResponse.json({ id });
  });
}
