'use client';

import Image from 'next/image';
import BookIcon from '../icons/book-icon';
import Button from '../button';
import { CardType } from 'app/type/card';
import Tag from '../tag';

type Props = CardType & {
  onCardAction?: (id: number) => void;
  isLoading?: boolean;
};

const Card = ({
  id,
  title,
  content,
  footerText,
  imagePath,
  showButton,
  onCardAction,
  status,
  isLoading = false,
}: Props) => {
  const onBorrowButtonClick = () => {
    onCardAction?.(id);
  };

  return (
    <div className="max-w-xs border rounded-lg shadow bg-gray-800 border-gray-700">
      <Image
        data-testid="image"
        className="w-full h-auto rounded-t-lg mb-2"
        src={imagePath}
        alt={`${title} Book Cover`}
        width="0"
        height="0"
        sizes="100vw"
      />
      <article className="p-5">
        <h5
          data-testid="title"
          className="mb-3 font-semibold tracking-tight text-white"
        >
          {title}
        </h5>
        <p
          data-testid="content"
          className="mb-3 font-normal text-gray-400 line-clamp-2"
        >
          {content}
        </p>
        <p data-testid="footerText" className="mb-3 text-sm">
          {footerText}
        </p>
        <div className="flex items-center justify-between">
          {status === 'Available' ? (
            <Tag label="Available" />
          ) : (
            <Tag label="Borrowed" variant="warning" />
          )}
          {showButton ? (
            <Button
              label="Borrow"
              isLoading={isLoading}
              className="w-24"
              icon={
                <span className="mr-1">
                  <BookIcon />
                </span>
              }
              onClick={onBorrowButtonClick}
            />
          ) : (
            <></>
          )}
        </div>
      </article>
    </div>
  );
};

export default Card;
