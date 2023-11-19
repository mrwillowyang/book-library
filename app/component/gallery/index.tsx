'use client';

import { useCallback, useState } from 'react';
import Card from '../card';
import { CardType } from 'app/type/card';

export type Props = {
  cards: CardType[] | undefined;
  onItemAction?: (id: number) => void;
};

const BookGallery = ({ cards, onItemAction }: Props) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const onCardAction = useCallback(
    (id: number) => {
      onItemAction?.(id);
      setLoadingStates((state) => ({
        ...state,
        [id]: true,
      }));
    },
    [onItemAction]
  );

  return (
    <section className="container mx-auto py-2">
      <div data-testid="gallery" className="flex flex-wrap -m-2">
        {Array.isArray(cards) &&
          cards.map(
            ({ title, content, footerText, id, imagePath, showTag }) => (
              <div key={id} className="flex w-1/4 flex-wrap">
                <div className="w-full p-3">
                  <Card
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    footerText={footerText}
                    imagePath={imagePath}
                    showTag={showTag}
                    onCardAction={onCardAction}
                    isLoading={Boolean(loadingStates[id])}
                  />
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default BookGallery;
