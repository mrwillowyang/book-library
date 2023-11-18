import { render } from '@testing-library/react';
import Nav from './navbar';
import '@testing-library/jest-dom';
import { pages } from 'app/data/pages';

jest.mock('next/navigation', () => ({
  usePathname() {
    return '/';
  },
}));

describe('Nav', () => {
  it('should render the title correctly', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('title').textContent).toBe('The Great Book Library');
  });

  it('should render the correct number of pages', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('page-list').childElementCount).toBe(pages.length);
  });

  it('should render all pages with the correct name and link', () => {
    const { getAllByRole } = render(<Nav />);
    const pageNodes = getAllByRole('page');
    pageNodes.forEach((page, index) => {
      expect(page).toHaveTextContent(pages[index].text);
      expect(page).toHaveAttribute('href', pages[index].href);
    });
  });

  it('should render the correct color for the current page', () => {
    const { getAllByRole } = render(<Nav />);
    expect(getAllByRole('page')[0]).toHaveClass('text-blue-500');
  });
});
