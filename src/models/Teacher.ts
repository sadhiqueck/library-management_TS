import { User } from "./User";

export class Teacher extends User {
  constructor(userId: string, name: string) {
    super(userId, name, 5);
  }
}
