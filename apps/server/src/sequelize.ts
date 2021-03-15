import { Sequelize } from 'sequelize-typescript';
import { SomeModel } from './models/SomeModel';


export const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [SomeModel],
  sync: true
  // hide a type issue with SequelizeOptions
} as any);

