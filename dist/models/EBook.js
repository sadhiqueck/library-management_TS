"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBook = void 0;
const book_1 = require("./book");
class EBook extends book_1.Book {
    constructor(id, title, author, downloadLink) {
        super(id, title, author);
        this.downloadLink = downloadLink;
    }
    getInfo() {
        return `E-Book: "${this.title}" by ${this.author} [Link: ${this.downloadLink}] - ${this.isAvailable ? "Available" : "Borrowed"}`;
    }
}
exports.EBook = EBook;
