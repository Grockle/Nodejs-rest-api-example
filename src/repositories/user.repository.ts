import UserSchema from '../schemas/user.mongoose.schema';
import debug from 'debug';
import { CreateUserModel } from '../models/user/create.user.model';

const log: debug.IDebugger = debug('user-repository');

class UserRepository {
    constructor() {

    }

    /**
     * Create User
     * @param CreateUserModel
     * @returns
     */
     async create(userFields: CreateUserModel){
        const createDate = Date.now();

        const user = new UserSchema(
        {
            create_date: createDate,
            ...userFields
        });

        await user.save();
        return user;
    }

    /**
     * Get All Users
     * @returns
     */
    async allUsers(){
        return await UserSchema.find().exec();
    }
}

export default new UserRepository();