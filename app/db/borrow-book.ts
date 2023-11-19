import db from './init-db';

export const borrowBook = async (bookId: number): Promise<void> =>
  new Promise((resolve, reject) => {
    db.serialize(() => {
      const booksSql = db.prepare('UPDATE book SET isAvailable=? WHERE id=?');
      booksSql.run(false, bookId);
      booksSql.finalize((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
