export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  imagePath: string;
  isAvailable: boolean;
};

export type NewBook = Omit<Book, 'id'>;
