import CardPlaceholder from '../card/placeholder';

export default function GalleryPlaceholder() {
  return (
    <section>
      <div data-testid="gallery" className="flex flex-wrap -m-2">
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
        <div className="flex w-1/4 flex-wrap">
          <div className="w-full p-3">
            <CardPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
