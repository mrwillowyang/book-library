import { render } from '@testing-library/react';
import List from './index';
import '@testing-library/jest-dom';
import { books } from 'app/data/books';
import { booksToCards } from 'app/utils/books-to-cards';

describe('List', () => {
  it('should render all books in the list', () => {
    const cards = booksToCards(books);
    const { getByTestId } = render(<List cards={cards} />);

    expect(getByTestId('list').childNodes).toHaveLength(books.length);
  });
});
