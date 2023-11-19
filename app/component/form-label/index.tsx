type Props = {
  label: string;
};

export default function FormLabel({ label }: Props) {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
  );
}
