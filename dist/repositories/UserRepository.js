"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [];
    }
    create(user) {
        this.users.push(user);
    }
    findAll() {
        return this.users;
    }
}
exports.UserRepository = UserRepository;
