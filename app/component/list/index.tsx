'use client';

import { memo, useCallback, useState } from 'react';
import { CardType } from 'app/type/card';
import HorizontalCard from '../horizontal-card';

export type Props = {
  cards: CardType[];
  onItemAction?: (id: number) => void;
};

const MemoCard = memo(HorizontalCard);

const List = ({ cards, onItemAction }: Props) => {
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
    <section data-testid="list" className="flex flex-wrap">
      {Array.isArray(cards) &&
        cards.map(
          ({
            title,
            footerText,
            content,
            id,
            imagePath,
            showButton,
            status,
          }) => (
            <div key={id} className="flex flex-col mb-5">
              <MemoCard
                key={id}
                id={id}
                title={title}
                content={content}
                footerText={footerText}
                imagePath={imagePath}
                showButton={showButton}
                onCardAction={onCardAction}
                isLoading={Boolean(loadingStates[id])}
                status={status}
              />
            </div>
          )
        )}
    </section>
  );
};

export default List;
