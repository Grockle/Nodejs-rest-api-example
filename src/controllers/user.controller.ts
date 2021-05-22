import express from 'express';
import userService from '../services/user.service';

class UserController {
    async getAllUsers(req: express.Request, res: express.Response) {
        const users = await userService.getAllUsers();
        if(users) {
            res.status(200).send(users);
        } else {
            res.status(204).send();
        }
    }

    async create(req: express.Request, res: express.Response) {
        const user = await userService.create(req.body);
        res.status(201).send(user);
    }
}

export default new UserController();