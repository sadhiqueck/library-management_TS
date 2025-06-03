"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, maxBooks) {
        this.userId = userId;
        this.name = name;
        this.maxBooks = maxBooks;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (this.borrowedBooks.length >= this.maxBooks) {
            console.log(`${this.name} has reached the borrowing limit of ${this.maxBooks} books.`);
            return;
        }
        if (!book.getAvailability()) {
            console.log(`The book "${book["title"]}" is not available.`);
            return;
        }
        book.borrow();
        this.borrowedBooks.push(book);
    }
    returnBook(bookId) {
        const index = this.borrowedBooks.findIndex((book) => book.getId() === bookId);
        if (index === -1) {
            console.log(`${this.name} has not borrowed this book.`);
            return;
        }
        const book = this.borrowedBooks[index];
        book.returnBook();
        this.borrowedBooks.splice(index, 1);
    }
    getBorrowedBooks() {
        if (this.borrowedBooks.length === 0) {
            console.log(`${this.name} has not borrowed any books.`);
            return;
        }
        console.log(`Books borrowed by ${this.name}:`);
        this.borrowedBooks.forEach((book) => console.log(book.getInfo()));
    }
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
