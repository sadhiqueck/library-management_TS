import { User } from "./User";

export class Student extends User {
  constructor(userId: string, name: string) {
    super(userId, name, 2);
  }
}
