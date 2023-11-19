import ImagePlaceholderIcon from '../icons/image-placeholder-icon';

export default function CardPlaceholder() {
  return (
    <div
      role="status"
      className="max-w-xs border rounded-lg shadow animate-pulse p-6 border-gray-700"
    >
      <div className="flex items-center justify-center h-48 mb- rounded bg-gray-700 mb-4">
        <ImagePlaceholderIcon />
      </div>
      <div className="h-2.5 rounded-full bg-gray-700 mb-4"></div>
      <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
      <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
      <div className="h-2 rounded-full bg-gray-700"></div>
    </div>
  );
}
