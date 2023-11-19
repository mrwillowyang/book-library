import { ReactNode } from 'react';
import CloseIcon from '../icons/close-icon';
import Button from '../button';

type Props = {
  title: string;
  content: ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
};

const Modal = ({ title, content, onClose, onConfirm }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 w-full rounded-m">
        <div className="relative xl:px-80 lg:px-40 md:px-5-20 pt-40 w-full max-h-full">
          <div className="relative rounded-lg shadow bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <Button
                label=""
                ghost
                icon={<CloseIcon />}
                outline
                onClick={onClose}
              />
            </div>
            <div className="p-4 md:p-5 space-y-4">{content}</div>
            <div className="flex items-center justify-end p-4 md:p-5 border-t rounded-b border-gray-600 space-x-4">
              <Button label="Confirm" onClick={onConfirm} />
              <Button label="Cancel" outline onClick={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
