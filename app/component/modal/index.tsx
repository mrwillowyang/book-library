import { ReactNode } from 'react';
import CloseIcon from '../icons/close-icon';
import Button from '../button';

type Props = {
  title: string;
  content: ReactNode;
  onClose?: () => void;
};

const Modal = ({ title, content, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-80 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="max-h-full h-full flex items-center justify-center">
        <div className="w-1/2">
          <div className="relative rounded-lg shadow bg-gray-900">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
