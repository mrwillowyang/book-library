import { Book } from 'app/type/book';
import { CardType } from 'app/type/card';

export const booksToCards = (books: Book[] | undefined): CardType[] =>
  Array.isArray(books)
    ? books.map(
        ({ author, description, id, imagePath, isAvailable, title }) => ({
          title: title || 'Unknown title',
          content: description,
          footerText: author ? `by ${author}` : 'Unknown author',
          id,
          imagePath,
          showButton: isAvailable,
          status: isAvailable ? 'Available' : 'Borrowed',
        })
      )
    : [];
