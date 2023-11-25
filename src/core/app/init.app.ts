import { App } from "./app";
import { PORT } from "../../config";
import { middlewares } from "../middlewares";

export const app = new App(PORT, middlewares);