import React, { ChangeEvent } from 'react';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange?: (text: string) => void;
};

export default function Textbox({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      type={label}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onTextChange}
    />
  );
}
