import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'suarez159!',
  database: 'hyeonDB',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});