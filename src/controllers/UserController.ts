import {
  controller,
  httpGet,
  httpPost,
  requestBody,
} from 'inversify-express-utils';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserDto } from '../dtos/CreateUserDto';
import { UserService } from '../services/UserService';
import { inject } from 'inversify';
import { TYPES } from '../types/types';
import { User } from '../entities/User';
import { Request, Response } from 'express';

@controller('/users')
export class UserController {
  constructor(@inject(TYPES.UserService) private service: UserService) {}

  @httpPost('/')
  async create(@requestBody() body: any, req: Request, res: Response) {
    const dto = plainToInstance(CreateUserDto, body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const user = new User(dto.name, dto.email);
    this.service.createUser(user);
    return res.status(201).json({ message: 'Usuario creado' });
  }

  @httpGet('/')
  getAll(req: Request, res: Response) {
    const users = this.service.getAllUsers();
    return res.json(users);
  }
}
