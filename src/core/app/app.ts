import express from 'express';
import { Routes } from "../routes";

export class App {
    public expressApp: express.Application;
    public port: number;

    private routes: Routes[];

    constructor(port: number, middlewares?: any[]) {
        this.expressApp = express();
        this.port = port;
        this.middlewares(middlewares);

        this.routes = [];
    }

    private middlewares(middlewares?: any[]) {
        middlewares?.forEach((middleware) => {
            this.expressApp.use(middleware);
        });
    }

    public listen() {
        this.expressApp.listen(this.port, () => {
            console.log('--------------------------------------------------');
            console.log(`Server listening on: http://localhost:${this.port}`);
            console.log('--------------------------------------------------');
        });
    }
}
