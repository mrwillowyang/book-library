type Variant = 'primary' | 'warning';

type Props = {
  variant?: Variant;
  label: string;
};

const getColor = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-green-200';
    case 'warning':
      return 'bg-yellow-200';
    default:
      return 'bg-green-200';
  }
};

export default function Tag({ variant = 'primary', label }: Props) {
  const color = getColor(variant);
  return (
    <span
      data-testid="available"
      className={`${color} rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700`}
    >
      {label}
    </span>
  );
}
