📚 Library Management System
A simple Object-Oriented Programming (OOP) project built with TypeScript, simulating a basic library system with books, users (students & teachers), and borrowing/returning features.

🚀 Features
Add printed and e-books

Register students and teachers

Borrow and return books

Track availability of books

Uses OOP concepts: Classes, Inheritance, Polymorphism

🏗️ Project Structure
bash
Copy
Edit
library-management/
├── src/
│   ├── models/               # Core class files
│   │   ├── Book.ts
│   │   ├── PrintedBook.ts
│   │   ├── EBook.ts
│   │   ├── User.ts
│   │   ├── Student.ts
│   │   ├── Teacher.ts
│   ├── services/             # Library manager logic
│   │   └── LibraryManager.ts
│   └── index.ts              # Main entry point
├── dist/                     # Compiled JS files (after build)
├── tsconfig.json             # TypeScript config
├── package.json              # Project setup and scripts
└── README.md
🛠️ Setup Instructions
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/library-management.git
cd library-management
Install dependencies

bash
Copy
Edit
npm install
Compile TypeScript

bash
Copy
Edit
npm run build
Run the project

bash
Copy
Edit
npm start
📘 Example Output
sql
Copy
Edit
Book "Atomic Habits" added to the library.
User "Sadhique" registered.
Available Books:
- Atomic Habits (by James Clear)
Sadhique borrowed "Atomic Habits".
🧠 Concepts Covered
Object-Oriented Programming

Abstraction, Inheritance, Polymorphism

TypeScript best practices

Clean code organization

🧑‍💻 Author
Sadhique

