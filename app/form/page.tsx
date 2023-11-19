'use client';

import { useFetchBooks } from 'app/utils/use-fetch-books';
import Nav from '../component/navbar';
import GalleryPlaceholder from 'app/component/gallery/placeholder';
import { booksToCards } from 'app/utils/books-to-cards';
import { memo, useMemo } from 'react';
import Button from 'app/component/button';
import List, { Props } from 'app/component/list';
import { useDeleteBook } from 'app/utils/delete-book';
import { isEqual } from 'lodash';
import { CardType } from 'app/type/card';
import { useAddBook } from 'app/utils/add-book';

export function Form() {
  const { data: books, isLoading } = useFetchBooks();
  const deleteBook = useDeleteBook();
  const addBook = useAddBook();
  const cards = useMemo(() => booksToCards(books), [books]);
  const onItemAction = (id: number) => {
    /*
      Known issue: 
        The react-query mutation function below triggers a re-render for the entire card list inside the Gallery component because it mutates the cards prop. It can cause performance issue when the card list contains a lost of items or the items are expensive to re-render.
      Solution:
        Memories the Gallery component with a deep comparison function (arePropsEqual) to avoid the component from re-rendering when the cards prop contains the same data as the pervious render.
      Result:
        Clicking on the borrow button on a card only trigger it to re-render. All other cards on the list does not re-render.
    */
    deleteBook.mutate(id);
  };
  const onAddBook = () => {
    // TODO: remove testing code below
    addBook.mutate({
      author: '',
      description: '',
      imagePath: '',
      isAvailable: true,
      title: '',
    });
  };

  return (
    <div className="w-full">
      <Nav />
      <main className="max-w-screen-xl mx-auto py-2 px-3">
        <div className="py-5 flex justify-end">
          <Button label="Add" onClick={onAddBook}></Button>
        </div>
        {isLoading ? (
          <GalleryPlaceholder />
        ) : (
          <MemoList cards={cards} onItemAction={onItemAction}></MemoList>
        )}
      </main>
    </div>
  );
}

export default Form;

function arePropsEqual(prevProps: Props, nextProps: Props) {
  function areEqual(prevData: CardType[], newData: CardType[]) {
    return isEqual(prevData, newData);
  }

  return areEqual(prevProps.cards, nextProps.cards);
}

const MemoList = memo(List, arePropsEqual);
