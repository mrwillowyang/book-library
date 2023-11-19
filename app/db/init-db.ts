import sqlite3 from 'sqlite3';
import { books } from '../data/books';

const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS book (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      author VARCHAR(255) NOT NULL,
      imagePath VARCHAR(255) NOT NULL,
      isAvailable BOOLEAN NOT NULL
    )`
  );

  const booksSql = db.prepare(
    'INSERT INTO book (title, description, author, imagePath, isAvailable) VALUES (?, ?, ?, ?, ?)'
  );
  books.forEach((book) => {
    booksSql.run(
      book.title,
      book.description,
      book.author,
      book.imagePath,
      book.isAvailable
    );
  });
  booksSql.finalize();
});

export default db;
