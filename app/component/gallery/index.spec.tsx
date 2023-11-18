import { render } from '@testing-library/react';
import Gallery from './index';
import '@testing-library/jest-dom';
import { books } from 'app/data/books';

describe('Gallery', () => {
  it('should render all books in the gallery', () => {
    const { getByTestId } = render(<Gallery />);

    expect(getByTestId('gallery').childNodes).toHaveLength(books.length);
  });
});
