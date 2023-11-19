'use client';

import Image from 'next/image';
import Button from '../button';
import { CardType } from 'app/type/card';
import Tag from '../tag';
import DeleteIcon from '../icons/delete-icon';

type Props = CardType & {
  onCardAction?: (id: number) => void;
  isLoading?: boolean;
};

const HorizontalCard = ({
  id,
  title,
  content,
  footerText,
  imagePath,
  status,
  onCardAction,
  isLoading = false,
}: Props) => {
  const onBorrowButtonClick = () => {
    onCardAction?.(id);
  };

  return (
    <div className="flex items-center border rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700 w-full">
      <Image
        data-testid="image"
        className="object-cover h-auto w-48 rounded-s-lg"
        src={imagePath}
        alt={`${title} Book Cover`}
        width="0"
        height="0"
        sizes="100vw"
      />
      <article className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="flex items-center space-x-4">
          <h5
            data-testid="title"
            className="mb-3 font-semibold tracking-tight text-white"
          >
            {title}
          </h5>
          <p data-testid="footerText" className="mb-3 text-sm">
            {footerText}
          </p>
        </div>
        <p
          data-testid="content"
          className="mb-3 font-normal text-gray-400 line-clamp-2"
        >
          {content}
        </p>
        <div className="flex items-center justify-between">
          {status === 'Available' ? (
            <Tag label="Available" />
          ) : (
            <Tag label="Borrowed" variant="warning" />
          )}
          <Button
            label="Delete"
            variant="danger"
            isLoading={isLoading}
            icon={
              <span className="mr-1">
                <DeleteIcon />
              </span>
            }
            onClick={onBorrowButtonClick}
          />
        </div>
      </article>
    </div>
  );
};

export default HorizontalCard;
