import { MouseEventHandler, ReactNode } from 'react';
import Spinner from '../spinner';

type Variant = 'primary' | 'danger';

type Props = {
  variant?: Variant;
  outline?: boolean;
  ghost?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler | undefined;
  label: string;
  icon?: ReactNode;
  className?: string;
};

const getColor = (
  variant: Variant,
  outline: boolean,
  ghost: boolean
): string => {
  if (ghost) {
    return '';
  }

  if (outline) {
    return 'border border-gray-500 hover:bg-gray-600';
  }

  switch (variant) {
    case 'primary':
      return `bg-blue-500 hover:bg-blue-600`;
    case 'danger':
      return `bg-red-500 hover:bg-red-600`;
    default:
      return `bg-blue-500 hover:bg-blue-600`;
  }
};

export default function Button({
  variant = 'primary',
  outline = false,
  isLoading = false,
  ghost = false,
  onClick,
  label,
  icon,
  className,
}: Props) {
  const buttonColor = getColor(variant, outline, ghost);

  return (
    <button
      data-testid="borrow-button"
      className={`py-2 px-4 rounded inline-flex items-center justify-center ${buttonColor} text-sm h-9 ${className}`}
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
