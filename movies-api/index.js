/* eslint-disable no-undef */
import usersRouter from './api/users';
import {loadUsers, loadMovies, loadUpcomingMovies, loadTopRatedMovies, loadAllMovies} from './seedData';
import './db';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/Movies';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from './authenticate/index';


dotenv.config();

const errHandler = (err, req, res) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcomingMovies();
  loadTopRatedMovies();
  loadAllMovies();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());

const port = process.env.PORT;

app.use(express.static('public'));
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);


// app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

 