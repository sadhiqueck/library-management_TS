"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const User_1 = require("./User");
class Student extends User_1.User {
    constructor(userId, name) {
        super(userId, name, 2);
    }
}
exports.Student = Student;
