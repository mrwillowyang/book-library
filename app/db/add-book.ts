import { Book } from 'app/type/book';
import db from './init-db';

export const addBook = async (book: Book): Promise<number> =>
  new Promise((resolve, reject) => {
    db.serialize(() => {
      const booksSql = db.prepare(
        'INSERT INTO book (title, description, author, imagePath, isAvailable) VALUES (?, ?, ?, ?, ?)'
      );
      booksSql.run(
        book.title,
        book.description,
        book.author,
        book.imagePath,
        book.isAvailable
      );
      booksSql.finalize((err) => {
        if (err) {
          reject(err);
        } else {
          db.all(
            'SELECT last_insert_rowid()',
            (err, row: [{ 'last_insert_rowid()': number }]) => {
              if (err) {
                reject(err);
              }
              resolve(row[0]['last_insert_rowid()']);
            }
          );
        }
      });
    });
  });
