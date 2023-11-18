import { books } from 'app/data/books';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(books);
}
