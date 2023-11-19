import { Book, NewBook } from 'app/type/book';
import { requestData } from './request-data';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const addBook = async (book: NewBook) =>
  requestData<{ id: number }>(`/api/book`, 'POST', book);

export const useAddBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addBook,
    onSuccess: (result, book) => {
      queryClient.setQueryData(['book'], (oldBooks: Book[]) => {
        if (!result) {
          return oldBooks;
        }
        const newBook: Book = { ...book, id: result.id };
        return [newBook, ...oldBooks];
      });
    },
    onError: (err) => {
      // Refer to point 3 in the improvement section on the README file
      console.log(err);
    },
  });
};
