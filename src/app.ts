import fastify from "fastify";

import 'reflect-metadata';
import requestHandler from "./middleware/requestHandler";
import responseHandler from "./middleware/responseHandler";
import authenticate from "./middleware/authenticate";

import authRouter from "./routes/auth.router";
import BodyParser from "./middleware/bodyParser";

import cors from '@fastify/cors'
import {AppDataSource} from "./data-source";
import swaggerPlugin from './plugins/swagger';
import datacenterRouter from "./routes/datacenter.router";
import serverRouter from "./routes/server.router";

require('dotenv').config()
const server = fastify({
    logger: (process.env.NODE_ENV !== "development"),
    bodyLimit: 4194304
});

server.register(cors, {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
});


AppDataSource.initialize().catch((err) => {console.error("Error: DB Connection Error !", err)});
server.addContentTypeParser(
    "application/json",
    { parseAs: "string" },
    BodyParser,
);


server.register(swaggerPlugin);

server.register(authRouter(), { prefix: "/auth" });
server.register(datacenterRouter(), { prefix: "/datacenter" });
server.register(serverRouter(), { prefix: "/server" });

server.addHook("onRequest", requestHandler());

server.addHook("preValidation", authenticate);

server.addHook("onSend", responseHandler());


export default server;
