import { Book } from 'app/type/book';
import { requestData } from './request-data';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const deleteBook = async (bookId: number) =>
  requestData<Book[]>(`/api/book/${bookId}`, 'DELETE');

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBook,
    onSuccess: (_, id) => {
      queryClient.setQueryData(['book'], (oldBooks: Book[]) =>
        oldBooks.filter((book) => book.id !== id)
      );
    },
    onError: (err) => {
      // Refer to point 3 in the improvement section on the README file
      console.log(err);
    },
  });
};
