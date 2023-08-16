import 'reflect-metadata';
import 'express-async-errors';
import express, { Express as Application } from "express";
import { createServer, Server as HttpServer } from 'http';
import { routes } from "./shared/routes";


class Main {
    public app: Application;
    public server: HttpServer;
    constructor() {
        this.app = express();
        this.server = createServer(this.app);
    };
    public async init() {
        this.routes();
     
    };

    private routes() {
        this.app.use(routes);
    };


    public listen() {
        this.server.listen(3006, () => {
            console.log(`Server running on port 3006`)
        });
    };
};

export const main = new Main();