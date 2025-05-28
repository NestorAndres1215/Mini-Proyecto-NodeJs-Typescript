"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const UserService_1 = require("../services/UserService");
const UserRepository_1 = require("../repositories/UserRepository");
const types_1 = require("../types/types");
// Ensure that the UserService, UserRepository, and TYPES are correctly imported from their respective files.
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.UserService).to(UserService_1.UserService).inSingletonScope();
container.bind(types_1.TYPES.UserRepository).to(UserRepository_1.UserRepository).inSingletonScope();
