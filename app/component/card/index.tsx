import Image from 'next/image';
import BookIcon from '../icons/book-icon';

type CardProps = {
  title: string;
  description: string;
  author: string;
  imagePath: string;
  isAvailable: boolean;
};

const Card = ({
  title,
  description,
  author,
  imagePath,
  isAvailable,
}: CardProps) => {
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
          data-testid="description"
          className="mb-3 font-normal text-gray-400 line-clamp-2"
        >
          {description}
        </p>
        <p data-testid="author" className="mb-3 text-sm">
          by {author}
        </p>
        <div className="flex items-center justify-between">
          {isAvailable ? (
            <span
              data-testid="available"
              className="bg-green-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700"
            >
              Available
            </span>
          ) : (
            <span
              data-testid="borrowed"
              className="bg-yellow-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700"
            >
              Borrowed
            </span>
          )}
          {isAvailable && (
            <button
              data-testid="borrow-button"
              className="py-2 px-4 rounded inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:ring-blue-700 text-sm"
            >
              <BookIcon className="mr-1 h-5 w-5" />
              <span>Borrow</span>
            </button>
          )}
        </div>
      </article>
    </div>
  );
};

export default Card;
