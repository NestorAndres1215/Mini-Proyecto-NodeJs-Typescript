import { User } from '../entities/User';

export class UserRepository {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
