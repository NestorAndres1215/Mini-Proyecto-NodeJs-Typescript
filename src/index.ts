import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';
import './controllers/UserController';
import { container } from './config/inversify.config';

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.json());
});

const app = server.build();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
