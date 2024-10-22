import express from 'express';
import { PORT } from './config.js';
import router from './routes/index.routes.js';
const app = express();

app.use(router);

//server
app.listen(PORT);
console.log("Serven on port ", PORT);
