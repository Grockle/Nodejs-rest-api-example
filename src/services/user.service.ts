import { CreateUserModel } from '../models/user/create.user.model';
import userRepository from '../repositories/user.repository';
import UserRepository from '../repositories/user.repository';

export class UserService {
    async create(userFields: CreateUserModel) {
        return await userRepository.create(userFields);
    }

    async getAllUsers() {
        return await userRepository.allUsers();
    }
}

export default new UserService();