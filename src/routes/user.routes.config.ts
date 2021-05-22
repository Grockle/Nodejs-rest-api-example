import {CommonRoutesConfig} from './common.routes.config';
import express from 'express';
import UserController from '../controllers/user.controller';
export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`).get(UserController.getAllUsers);
        this.app.route(`/users`).post(UserController.create);
        return this.app;
    }

}