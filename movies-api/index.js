import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import moviesRouter from './api/movies';


dotenv.config();

const app = express();

const port = 8080;

app.use(express.static('public'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});