"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const User_1 = require("./User");
class Teacher extends User_1.User {
    constructor(userId, name) {
        super(userId, name, 5);
    }
}
exports.Teacher = Teacher;
