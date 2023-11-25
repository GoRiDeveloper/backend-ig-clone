import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware {
    static getMiddleware(req: Request, res: Response, next: NextFunction) {
        const date = new Date().toISOString();
        console.log(`[${date}] ${req.method} ${req.path}`);
        next();
    }
}
