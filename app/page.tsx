'use client';

import { useFetchBooks } from './utils/use-fetch-books';
import GalleryPlaceholder from './component/gallery/placeholder';
import Gallery from './component/gallery';
import Navbar from './component/navbar';
import { useMemo } from 'react';
import { booksToCards } from './utils/books-to-cards';

export function Index() {
  const { data: books, isLoading } = useFetchBooks();
  const cards = useMemo(() => booksToCards(books), [books]);

  return (
    <div className="w-full">
      <Navbar />
      <main className="p-10">
        {isLoading ? <GalleryPlaceholder /> : <Gallery cards={cards} />}
      </main>
    </div>
  );
}

export default Index;
