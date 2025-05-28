import { inject, injectable } from 'inversify';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';
import { TYPES } from '../types/types';
// If TYPES is needed, ensure the file exists at ../types/types.ts and contains the export.
// Otherwise, comment out or remove this import and update the constructor accordingly.

@injectable()
export class UserService {
  constructor(@inject(TYPES.UserRepository) private repo: UserRepository) {}

  createUser(user: User) {
    this.repo.create(user);
  }

  getAllUsers(): User[] {
    return this.repo.findAll();
  }
}
