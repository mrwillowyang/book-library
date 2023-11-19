'use client';

import { memo, useCallback, useState } from 'react';
import Card from '../card';
import { CardType } from 'app/type/card';

export type Props = {
  cards: CardType[];
  onItemAction?: (id: number) => void;
};

const MemoCard = memo(Card);

const Gallery = ({ cards, onItemAction }: Props) => {
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
    <section data-testid="gallery" className="flex flex-wrap -m-2 ">
      {Array.isArray(cards) &&
        cards.map(({ title, footerText, content, id, imagePath, showTag }) => (
          <div key={id} className="flex w-1/4 flex-wrap">
            <div className="w-full p-3">
              <MemoCard
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
        ))}
    </section>
  );
};

export default Gallery;
