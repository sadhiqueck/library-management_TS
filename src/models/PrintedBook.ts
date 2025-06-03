import { Book } from "./book";

export class PrintedBook extends Book {
  private shelfNumber: string;

  constructor(id: string, title: string, author: string, shelfNumber: string) {
    super(id, title, author);
    this.shelfNumber = shelfNumber;
  }

  getInfo(): string {
    return `Printed Book: "${this.title}" by ${this.author} [Shelf: ${
      this.shelfNumber
    }] - ${this.isAvailable ? "Available" : "Borrowed"}`;
  }
}
