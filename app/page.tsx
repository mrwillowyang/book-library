'use client';

import { useFetchBooks } from './utils/use-fetch-books';
import GalleryPlaceholder from './component/gallery/placeholder';
import Gallery, { Props } from './component/gallery';
import Navbar from './component/navbar';
import { booksToCards } from './utils/books-to-cards';
import { ReactNode, memo, useCallback, useMemo, useState } from 'react';
import { useBorrowBook } from './utils/borrow-book';
import isEqual from 'lodash/isEqual';
import { CardType } from './type/card';
import Button from './component/button';
import RightIcon from './component/icons/right-icon';
import UpIcon from './component/icons/up-icon';
import DownIcon from './component/icons/down-icon';

export function Index() {
  const { data: books, isLoading } = useFetchBooks();
  const [sortByTitle, setSortByTitle] = useState<'up' | 'down' | undefined>(
    undefined
  );
  const borrowBook = useBorrowBook();
  const cards = useMemo(
    () => booksToCards(books, sortByTitle),
    [books, sortByTitle]
  );
  const onItemAction = useCallback(
    (id: number) => {
      /*
        Known issue: 
          The react-query mutation function below triggers a re-render for the entire card list inside the Gallery component because it mutates the cards prop. It can cause performance issue when the card list contains a lost of items or the items are expensive to re-render.
        Solution:
          Memories the Gallery component with a deep comparison function (arePropsEqual) to avoid the component from re-rendering when the cards prop contains the same data as the pervious render.
        Result:
          Clicking on the borrow button on a card only trigger it to re-render. All other cards on the list does not re-render.
      */
      borrowBook.mutate(id);
    },
    [borrowBook]
  );
  const onSort = () => {
    setSortByTitle((state) => (state === 'down' ? 'up' : 'down'));
  };

  return (
    <main className="max-w-screen-xl mx-auto py-5 px-3">
      <div className="py-5 flex justify-end">
        <Button
          label="Sort By Title"
          onClick={onSort}
          icon={getIcon(sortByTitle)}
        ></Button>
      </div>
      {isLoading ? (
        <GalleryPlaceholder />
      ) : (
        <MemoGallery cards={cards} onItemAction={onItemAction} />
      )}
    </main>
  );
}

function getIcon(sortByTitle: 'up' | 'down' | undefined): ReactNode {
  switch (sortByTitle) {
    case 'up':
      return <UpIcon />;
    case 'down':
      return <DownIcon />;
    default:
      return <RightIcon />;
  }
}

function arePropsEqual(prevProps: Props, nextProps: Props) {
  function areEqual(prevData: CardType[], newData: CardType[]) {
    return isEqual(prevData, newData);
  }

  return areEqual(prevProps.cards, nextProps.cards);
}

const MemoGallery = memo(Gallery, arePropsEqual);

export default Index;
