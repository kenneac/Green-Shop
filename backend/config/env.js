import dotenv from "dotenv";

dotenv.config();

//gives other files ability to access environment variables contents
export const ENV = {
    NODE_ENV: process.env.NODE_ENV ?? (() => { throw new Error("NODE_ENV value is missing in .env file") })(),
    PORT: process.env.PORT ?? (() => { throw new Error("PORT value is missing in .env file") })(),
};