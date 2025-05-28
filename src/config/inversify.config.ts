import { Container } from 'inversify';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';
import { TYPES } from '../types/types';
// Ensure that the UserService, UserRepository, and TYPES are correctly imported from their respective files.
const container = new Container();
container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();

export { container };
