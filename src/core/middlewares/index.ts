import { CorsMiddleware } from './cors.middleware';
import { LoggerMiddleware } from './logger.middleware';

/**
 * App Middlewares.
 */
export const middlewares = [
    CorsMiddleware.getMiddleware,
    LoggerMiddleware.getMiddleware,
];
