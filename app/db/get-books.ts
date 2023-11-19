import { Book } from 'app/type/book';
import db from './init-db';

export const getBooks = async (): Promise<Book[]> =>
  new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(
        'SELECT id, title, description, author, imagePath, isAvailable FROM book',
        (err, row: Book[]) => {
          if (err) {
            reject(err);
          }
          resolve(row);
        }
      );
    });
  });
