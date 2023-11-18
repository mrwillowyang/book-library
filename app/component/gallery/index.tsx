import { books } from 'app/data/books';
import Card from '../card';

const Gallery = () => {
  return (
    <section className="container mx-auto py-2">
      <div data-testid="gallery" className="flex flex-wrap -m-2">
        {books.map(
          ({ title, author, description, id, imagePath, isAvailable }) => (
            <div key={id} className="flex w-1/4 flex-wrap">
              <div className="w-full p-3">
                <Card
                  key={id}
                  title={title}
                  description={description}
                  author={author}
                  imagePath={imagePath}
                  isAvailable={isAvailable}
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Gallery;