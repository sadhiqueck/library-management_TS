import { Book } from "./book";

export class EBook extends Book {
  private downloadLink: string;

  constructor(id: string, title: string, author: string, downloadLink: string) {
    super(id, title, author);
    this.downloadLink = downloadLink;
  }

  getInfo(): string {
    return `E-Book: "${this.title}" by ${this.author} [Link: ${
      this.downloadLink
    }] - ${this.isAvailable ? "Available" : "Borrowed"}`;
  }
}
