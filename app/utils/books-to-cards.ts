import { Book } from 'app/type/book';
import { CardType } from 'app/type/card';

export const booksToCards = (books: Book[] | undefined): CardType[] =>
  books
    ? books.map(
        ({ author, description, id, imagePath, isAvailable, title }) => ({
          title,
          content: description,
          footerText: `by ${author}`,
          id,
          imagePath,
          showButton: isAvailable,
          status: isAvailable ? 'Available' : 'Borrowed',
        })
      )
    : [];
