"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintedBook = void 0;
const book_1 = require("./book");
class PrintedBook extends book_1.Book {
    constructor(id, title, author, shelfNumber) {
        super(id, title, author);
        this.shelfNumber = shelfNumber;
    }
    getInfo() {
        return `Printed Book: "${this.title}" by ${this.author} [Shelf: ${this.shelfNumber}] - ${this.isAvailable ? "Available" : "Borrowed"}`;
    }
}
exports.PrintedBook = PrintedBook;
