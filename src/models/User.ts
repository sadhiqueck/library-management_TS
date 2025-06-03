import { Book } from "./book";

export class User {
  protected userId: string;
  protected name: string;
  protected borrowedBooks: Book[];
  protected maxBooks: number;

  constructor(userId: string, name: string, maxBooks: number) {
    this.userId = userId;
    this.name = name;
    this.maxBooks = maxBooks;
    this.borrowedBooks = [];
  }

  borrowBook(book: Book): void {
    if (this.borrowedBooks.length >= this.maxBooks) {
      console.log(
        `${this.name} has reached the borrowing limit of ${this.maxBooks} books.`
      );
      return;
    }

    if (!book.getAvailability()) {
      console.log(`The book "${book["title"]}" is not available.`);
      return;
    }

    book.borrow();
    this.borrowedBooks.push(book);
  }

  returnBook(bookId: string): void {
    const index = this.borrowedBooks.findIndex(
      (book) => book.getId() === bookId
    );
    if (index === -1) {
      console.log(`${this.name} has not borrowed this book.`);
      return;
    }

    const book = this.borrowedBooks[index];
    book.returnBook();
    this.borrowedBooks.splice(index, 1);
  }

  getBorrowedBooks(): void {
    if (this.borrowedBooks.length === 0) {
      console.log(`${this.name} has not borrowed any books.`);
      return;
    }

    console.log(`Books borrowed by ${this.name}:`);
    this.borrowedBooks.forEach((book) => console.log(book.getInfo()));
  }

  getUserId(): string {
    return this.userId;
  }

  getName(): string {
    return this.name;
  }
}
