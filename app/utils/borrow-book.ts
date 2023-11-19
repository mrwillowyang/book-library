import { Book } from 'app/type/book';
import { requestData } from './request-data';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const borrowBook = async (bookId: number) =>
  requestData<Book[]>(`/api/book/${bookId}/borrow`, 'PATCH');

export const useBorrowBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: borrowBook,
    onSuccess: (_, id) => {
      queryClient.setQueryData(['book'], (oldBooks: Book[]) =>
        oldBooks.map((book) =>
          book.id === id ? { ...book, isAvailable: false } : book
        )
      );
    },
  });
};
