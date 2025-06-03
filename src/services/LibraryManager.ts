import { Book } from "../models/book";
import { User } from "../models/User";

export class LibraryManager {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book["title"]}" added to the library.`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User "${user.getName()}" registered.`);
  }

  findBookById(bookId: string): Book | undefined {
    return this.books.find((book) => book.getId() === bookId);
  }

  findUserById(userId: string): User | undefined {
    return this.users.find((user) => user.getUserId() === userId);
  }

  borrowBook(userId: string, bookId: string): void {
    const user = this.findUserById(userId);
    const book = this.findBookById(bookId);

    if (!user || !book) {
      console.log(`Invalid user ID or book ID.`);
      return;
    }

    user.borrowBook(book);
  }

  returnBook(userId: string, bookId: string): void {
    const user = this.findUserById(userId);
    if (!user) {
      console.log(`User not found.`);
      return;
    }

    user.returnBook(bookId);
  }

  listAvailableBooks(): void {
    console.log(`\nAvailable Books:`);
    this.books
      .filter((book) => book.getAvailability())
      .forEach((book) => console.log(book.getInfo()));
  }

  listAllUsers(): void {
    console.log(`\nRegistered Users:`);
    this.users.forEach((user) =>
      console.log(`- ${user.getName()} (ID: ${user.getUserId()})`)
    );
  }
}
