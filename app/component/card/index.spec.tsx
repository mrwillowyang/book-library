import { render } from '@testing-library/react';
import Card from './index';
import '@testing-library/jest-dom';
import { books } from 'app/data/books';

describe('Card', () => {
  it('should render all content as expected', () => {
    const { author, description, imagePath, title, isAvailable } = books[0];
    const { getByTestId, queryByTestId } = render(
      <Card
        author={author}
        description={description}
        imagePath={imagePath}
        title={title}
        isAvailable={isAvailable}
      />
    );

    expect(getByTestId('title')).toHaveTextContent(title);
    expect(getByTestId('description')).toHaveTextContent(description);
    expect(getByTestId('image')).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent(imagePath))
    );
    expect(getByTestId('image')).toHaveAttribute(
      'alt',
      expect.stringContaining(title)
    );
    expect(getByTestId('author')).toHaveTextContent(author);
    if (isAvailable) {
      expect(getByTestId('available')).toBeTruthy();
      expect(queryByTestId('borrowed')).toBeNull();
      expect(getByTestId('borrow-button')).toBeTruthy();
    } else {
      expect(queryByTestId('available')).toBeNull();
      expect(getByTestId('borrowed')).toBeTruthy();
      expect(queryByTestId('borrow-button')).toBeNull();
    }
  });
});
