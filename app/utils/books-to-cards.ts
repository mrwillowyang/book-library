import { Book } from 'app/type/book';
import { CardType } from 'app/type/card';

const descendingSort = (books: Book[]) =>
  books.sort((a, b) => (a.title > b.title ? 1 : -1));
const ascending = (books: Book[]) =>
  books.sort((a, b) => (a.title > b.title ? -1 : 1));

const sortBooks = (books: Book[], sortByTitle?: 'up' | 'down'): Book[] => {
  if (!sortByTitle) {
    return books;
  }
  if (sortByTitle === 'up') {
    return ascending(books);
  }
  return descendingSort(books);
};

export const booksToCards = (
  books: Book[] | undefined,
  sortByTitle?: 'up' | 'down'
): CardType[] => {
  if (!Array.isArray(books)) {
    return [];
  }

  const sortedBooks = sortBooks(books, sortByTitle);

  return sortedBooks.map(
    ({ author, description, id, imagePath, isAvailable, title }) => ({
      title: title || 'Unknown title',
      content: description,
      footerText: author ? `by ${author}` : 'Unknown author',
      id,
      imagePath,
      showButton: isAvailable,
      status: isAvailable ? 'Available' : 'Borrowed',
    })
  );
};
