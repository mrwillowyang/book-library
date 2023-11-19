import { useState } from 'react';
import FormField from './form-field';
import Button from './button';
import { NewBook } from 'app/type/book';

type Props = {
  onConfirm?: (book: NewBook) => void;
  onClose?: () => void;
};

export default function AddBookForm({ onClose, onConfirm }: Props) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    imagePath: '',
  });
  const onTitleChange = (title: string) => {
    setFormData((state) => ({
      ...state,
      title,
    }));
  };
  const onDescriptionChange = (description: string) => {
    setFormData((state) => ({
      ...state,
      description,
    }));
  };
  const onAuthorChange = (author: string) => {
    setFormData((state) => ({
      ...state,
      author,
    }));
  };
  const onImagePathChange = (imagePath: string) => {
    setFormData((state) => ({
      ...state,
      imagePath,
    }));
  };
  const onFormConfirm = () => {
    onConfirm?.({
      ...formData,
      isAvailable: true,
    });
  };

  return (
    <form>
      <FormField
        label="Title"
        placeholder="Title"
        value={formData.title}
        onChange={onTitleChange}
      />
      <FormField
        label="Description"
        placeholder="Description"
        value={formData.description}
        onChange={onDescriptionChange}
      />
      <FormField
        label="Author"
        placeholder="Author"
        value={formData.author}
        onChange={onAuthorChange}
      />
      <FormField
        label="Cover Image URL"
        placeholder="Cover Image URL"
        value={formData.imagePath}
        onChange={onImagePathChange}
      />
      <div className="flex items-center justify-end pt-5 pb-2 border-t rounded-b border-gray-600 space-x-4">
        <Button label="Confirm" onClick={onFormConfirm} />
        <Button label="Cancel" outline onClick={onClose} />
      </div>
    </form>
  );
}
