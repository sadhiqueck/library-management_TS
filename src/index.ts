// src/index.ts
import { PrintedBook } from './models/PrintedBook';
import { EBook } from './models/EBook';
import { Student } from './models/Student';
import { Teacher } from './models/Teacher';
import { LibraryManager } from './services/LibraryManager';

// 1. Create Library Manager
const library = new LibraryManager();

// 2. Create Books
const book1 = new PrintedBook('101', 'Atomic Habits', 'James Clear', 'A1');
const book2 = new PrintedBook('102', 'Clean Code', 'Robert C. Martin', 'B3');
const book3 = new EBook('103', 'The Pragmatic Programmer', 'Andy Hunt', 'http://ebooks.com/pragmatic');

// 3. Add Books to Library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// 4. Create Users
const student1 = new Student('s001', 'Sadhique');
const teacher1 = new Teacher('t001', 'Ms. Aisha');

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
