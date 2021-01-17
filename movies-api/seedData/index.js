import userModel from '../api/users/userModel';
import movieModel from '../api/Movies/movieModel';
import upcomingModel from '../api/Movies/upcomingMoviesModel';
import topRatedModel from '../api/Movies/topRatedMoviesModel';
import allMoviesModel from '../api/Movies/allMoviesModel';
import {Movies} from './Movies.js';
import {upcomingMovies} from './upcomingMovies.js';
import {topRatedMovies} from './topRatedMovies.js';
import {allMovies} from './allMovies.js';


const users = [
  {
    'username': 'user1',
    'password': 'test1',
    'favorites': [],
    
  },
  {
    'username': 'user2',
    'password': 'test2',
    
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all Movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(Movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(Movies);
    console.info(`${Movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}



export async function loadUpcomingMovies() {
  console.log('load seed data');
  console.log(upcomingMovies.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcomingMovies);
    console.info(`${upcomingMovies.length} UpcomingMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadTopRatedMovies() {
  console.log('load seed data');
  console.log(topRatedMovies.length);
  try {    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRatedMovies);
    console.info(`${topRatedMovies.length} topRatedMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}
export async function loadAllMovies() {
  console.log('load seed data');
  console.log(allMovies.length);
  try {
    await allMoviesModel.deleteMany();
    await allMoviesModel.collection.insertMany(allMovies);
    console.info(`${allMovies.length} AllMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}