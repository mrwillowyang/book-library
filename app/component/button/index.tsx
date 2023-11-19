import { MouseEventHandler, ReactNode } from 'react';
import Spinner from '../spinner';

type Props = {
  isLoading?: boolean;
  onClick?: MouseEventHandler | undefined;
  label: string;
  icon?: ReactNode;
};

export default function Button({
  isLoading = false,
  onClick,
  label,
  icon,
}: Props) {
  return (
    <button
      data-testid="borrow-button"
      className="py-2 px-4 rounded inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 focus:ring-blue-700 text-sm w-24 h-9"
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {icon}
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
