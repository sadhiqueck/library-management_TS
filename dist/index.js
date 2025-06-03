"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const PrintedBook_1 = require("./models/PrintedBook");
const EBook_1 = require("./models/EBook");
const Student_1 = require("./models/Student");
const Teacher_1 = require("./models/Teacher");
const LibraryManager_1 = require("./services/LibraryManager");
// 1. Create Library Manager
const library = new LibraryManager_1.LibraryManager();

// 2. Create Books
const book1 = new PrintedBook_1.PrintedBook('101', 'Atomic Habits', 'James Clear', 'A1');
const book2 = new PrintedBook_1.PrintedBook('102', 'Clean Code', 'Robert C. Martin', 'B3');
const book3 = new EBook_1.EBook('103', 'The Pragmatic Programmer', 'Andy Hunt', 'http://ebooks.com/pragmatic');

// 3. Add Books to Library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// 4. Create Users
const student1 = new Student_1.Student('s001', 'Sadhique');
const teacher1 = new Teacher_1.Teacher('t001', 'Ms. Aisha');

// 5. Add Users to Library
library.addUser(student1);
library.addUser(teacher1);

// 6. Actions
library.listAvailableBooks();
library.borrowBook('s001', '101'); // Student borrows Atomic Habits
library.borrowBook('t001', '102'); // Teacher borrows Clean Code
library.borrowBook('s001', '102'); // Should say already borrowed
library.listAvailableBooks();
student1.getBorrowedBooks();
library.returnBook('s001', '101'); // Return book
library.listAvailableBooks();
