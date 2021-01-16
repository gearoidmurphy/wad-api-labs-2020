import express from 'express';
import movieModel from './movieModel';
import upcomingModel from './upcomingMoviesModel';
import topratedModel from './topRatedMoviesModel';
import {getMovieReviews, getCredits, getsimilarMovies} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/upcoming', (req, res, next) => {
  upcomingModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

router.get('/toprated', (req, res, next) => {
  topratedModel.find().then(toprated => res.status(200).send(toprated)).catch(next);
});



router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getCredits(id)
  .then(credits => res.status(200).send(credits))
  .catch((error) => next(error));
});

router.get('/:id/similars', (req, res, next) => {
  const id = parseInt(req.params.id);
  getsimilarMovies(id)
  .then(similars => res.status(200).send(similars))
  .catch((error) => next(error));
});
export default router;