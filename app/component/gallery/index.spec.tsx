import { render } from '@testing-library/react';
import Gallery from './index';
import '@testing-library/jest-dom';
import { books } from 'app/data/books';
import { booksToCards } from 'app/utils/books-to-cards';

describe('Gallery', () => {
  it('should render all books in the gallery', () => {
    const cards = booksToCards(books);
    const { getByTestId } = render(<Gallery cards={cards} />);

    expect(getByTestId('gallery').childNodes).toHaveLength(books.length);
  });
});
