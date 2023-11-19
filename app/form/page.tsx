'use client';

import { useFetchBooks } from 'app/utils/use-fetch-books';
import Nav from '../component/navbar';
import GalleryPlaceholder from 'app/component/gallery/placeholder';
import { booksToCards } from 'app/utils/books-to-cards';
import { useMemo } from 'react';
import Button from 'app/component/button';
import List from 'app/component/list';

export function Form() {
  const { data: books, isLoading } = useFetchBooks();
  const cards = useMemo(() => booksToCards(books), [books]);
  return (
    <div className="w-full">
      <Nav />
      <main className="max-w-screen-xl mx-auto py-2 px-3">
        <div className="py-5 flex justify-end">
          <Button label="Add"></Button>
        </div>
        {isLoading ? <GalleryPlaceholder /> : <List cards={cards}></List>}
      </main>
    </div>
  );
}

export default Form;
