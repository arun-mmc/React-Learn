import {Server} from "./app";
import express from 'express';
import http from "http";
import path from "path";

import dotenv from "dotenv";
dotenv.config({ path: __dirname+'/config/.env' });
// module.exports = {
//   endpoint: process.env.API_URL,
//   masterKey: process.env.API_KEY,
//   port: process.env.PORT
// };

const app = express();
const port = parseInt(process.env.PORT, 10) || 4000;

const server = new Server(app);
server.start(port);