'use client';

import { useFetchBooks } from './utils/use-fetch-books';
import GalleryPlaceholder from './component/gallery/placeholder';
import Gallery from './component/gallery';
import Navbar from './component/navbar';
import { booksToCards } from './utils/books-to-cards';
import { useCallback, useMemo } from 'react';
import { useBorrowBook } from './utils/borrow-book';

export function Index() {
  const { data: books, isLoading } = useFetchBooks();
  const borrowBook = useBorrowBook();
  const cards = useMemo(() => booksToCards(books), [books]);
  const onItemAction = useCallback(
    (id: number) => {
      borrowBook.mutate(id);
    },
    [borrowBook]
  );

  return (
    <div className="w-full">
      <Navbar />
      <main className="p-10">
        {isLoading ? (
          <GalleryPlaceholder />
        ) : (
          <Gallery cards={cards} onItemAction={onItemAction} />
        )}
      </main>
    </div>
  );
}

export default Index;
