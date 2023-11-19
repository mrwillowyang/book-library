import { Book } from 'app/type/book';
import { requestData } from './request-data';
import { useQuery } from '@tanstack/react-query';

const fetchBook = async () => {
  const books = await requestData<Book[]>('/api/book', 'GET');
  console.log('books', books);
  return books || [];
};

export const useFetchBooks = () => {
  return useQuery<Book[], Error>({
    queryKey: ['book'],
    queryFn: fetchBook,
  });
};
