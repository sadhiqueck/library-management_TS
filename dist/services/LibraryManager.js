"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryManager = void 0;
class LibraryManager {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book["title"]}" added to the library.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.getName()}" registered.`);
    }
    findBookById(bookId) {
        return this.books.find((book) => book.getId() === bookId);
    }
    findUserById(userId) {
        return this.users.find((user) => user.getUserId() === userId);
    }
    borrowBook(userId, bookId) {
        const user = this.findUserById(userId);
        const book = this.findBookById(bookId);
        if (!user || !book) {
            console.log(`Invalid user ID or book ID.`);
            return;
        }
        user.borrowBook(book);
    }
    returnBook(userId, bookId) {
        const user = this.findUserById(userId);
        if (!user) {
            console.log(`User not found.`);
            return;
        }
        user.returnBook(bookId);
    }
    listAvailableBooks() {
        console.log(`\nAvailable Books:`);
        this.books
            .filter((book) => book.getAvailability())
            .forEach((book) => console.log(book.getInfo()));
    }
    listAllUsers() {
        console.log(`\nRegistered Users:`);
        this.users.forEach((user) => console.log(`- ${user.getName()} (ID: ${user.getUserId()})`));
    }
}
exports.LibraryManager = LibraryManager;
