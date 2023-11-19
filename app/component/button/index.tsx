import { MouseEventHandler, ReactNode } from 'react';
import Spinner from '../spinner';

type Variant = 'primary' | 'danger';

type Props = {
  variant?: Variant;
  isLoading?: boolean;
  onClick?: MouseEventHandler | undefined;
  label: string;
  icon?: ReactNode;
};

const getColor = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-700';
    case 'danger':
      return 'bg-red-500 hover:bg-red-600 focus:ring-red-700';
    default:
      return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-700';
  }
};

export default function Button({
  variant = 'primary',
  isLoading = false,
  onClick,
  label,
  icon,
}: Props) {
  const buttonColor = getColor(variant);

  return (
    <button
      data-testid="borrow-button"
      className={`py-2 px-4 rounded inline-flex items-center justify-center ${buttonColor} text-sm w-24 h-9`}
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
