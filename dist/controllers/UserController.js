"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const CreateUserDto_1 = require("../dtos/CreateUserDto");
const UserService_1 = require("../services/UserService");
const inversify_1 = require("inversify");
const types_1 = require("../types/types");
const User_1 = require("../entities/User");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    async create(body, req, res) {
        const dto = (0, class_transformer_1.plainToInstance)(CreateUserDto_1.CreateUserDto, body);
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const user = new User_1.User(dto.name, dto.email);
        this.service.createUser(user);
        return res.status(201).json({ message: 'Usuario creado' });
    }
    getAll(req, res) {
        const users = this.service.getAllUsers();
        return res.json(users);
    }
};
exports.UserController = UserController;
__decorate([
    (0, inversify_express_utils_1.httpPost)('/'),
    __param(0, (0, inversify_express_utils_1.requestBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, inversify_express_utils_1.httpGet)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
exports.UserController = UserController = __decorate([
    (0, inversify_express_utils_1.controller)('/users'),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.UserService)),
    __metadata("design:paramtypes", [UserService_1.UserService])
], UserController);
