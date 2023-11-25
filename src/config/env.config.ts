import { config } from 'dotenv';

config();

const ENV = process.env;

export const API_CONFIG = Object.freeze({
    API_PREFIX: ENV.API_PREFIX as string,
    API_VERSION: ENV.API_VERSION as string
});

export const PORT = Number(ENV.PORT) || 8080;