import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
require('dotenv').config()


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.PGHOST,
    port: 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    entities: [__dirname + '/entities/*.{ts,js}'],
    migrations: [__dirname + '/migrations/*.ts'],
});
