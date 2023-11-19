import db from './init-db';

export const deleteBook = async (bookId: number): Promise<void> =>
  new Promise((resolve, reject) => {
    db.serialize(() => {
      const booksSql = db.prepare('DELETE FROM book WHERE id=?');
      booksSql.run(bookId);
      booksSql.finalize((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
