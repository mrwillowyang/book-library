import FormLabel from '../form-label';
import Textbox from '../textbox';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange?: (text: string) => void;
};

export default function FormField({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-6">
      <FormLabel label={label} />
      <Textbox
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
