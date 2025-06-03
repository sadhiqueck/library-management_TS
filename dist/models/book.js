"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    borrow() {
        if (!this.isAvailable) {
            console.log(`Book ${this.title} is not available now.`);
            return;
        }
        this.isAvailable = false;
        console.log(`Book "${this.title}" has been borrowed.`);
    }
    returnBook() {
        this.isAvailable = true;
        console.log(`Book "${this.title}" has been returned.`);
    }
    getAvailability() {
        return this.isAvailable;
    }
    getId() {
        return this.id;
    }
}
exports.Book = Book;
