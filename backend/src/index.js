import express from 'express'
import router from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(router);

app.listen(PORT);
console.log("Server on port ", PORT);
