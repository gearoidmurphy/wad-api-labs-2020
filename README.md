# Assignment 2 - Web API.

Name: Gearoid Murphy

## Features.


 + Upcoming Movies Page - Add a Uppcoming Movies database to my movies_api this contains twenty upcoming movies you are able to view the details of these movies 
 + Top Rated Movies Page - Add a Top Rated Movies database to my movies_api this contains twenty Top Rated movies you are able to view the details of these movies
 + User Specific Favorites = I created a favorites page which holds each users specific favorites which are stored in the user database withinj each user
 + Filter controls - These controls allow a user to filter the movies based on what they type in the bar
 + Movie Details Page - This shows more details on a movie 
 + Simlar Movies - In the details page it shows other similar movies 
 + Credits - In the deatails page it shows a list of people who acted in the movie

## Installation Requirements

Presuming you have MongoDb Is installed 
You start by making a Db folder This is done by:

```bat
mkdir db
mongod -dbpath db
```

Now you need to install Node.js to your computer you can download this from below:(The LTS Version)

https://nodejs.org/en/download/

Now the Start Up we start by opening a terminal and changing directory to the db folder created above in which you will start Mongod:

```bat
mongod.exe
```

Then you need to open a second terminal and open in the downloaded folder and cd into movie_api folder and run:

```bat
npm install
npm start
```
Then open another terminal and cd into the react_app folder and run the command from above again


## API Configuration
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
REACT_APP_TMDB_KEY=YOURTMBDKEY
mongoDB=YourMongoURL
SEED_DB=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A 
| /api/movies/upcoming |Gets a list of Upcoming movies | N/A | N/A |
| /api/movies/toprated |Gets a list of Top Rated movies | N/A | N/A |
| /api/movies/:id/credits |Gets a list of movie credits | N/A | N/A |
| /api/movies/:id/similars |Gets a list of similar movies |N/A | N/A |
| /api/users/:username/favourites |Gets the list user specific movies | Posts the movie to users favorites list | N/A |
| /api/users |posts the username and password and checks if they are in the database | N/A | N/A |
| /api/users?action=register |posts the username and password and adds them to the database | N/A | N/A |
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication

The user needs to be authenticated to access any page other than the homepage, login and signup  

To get authenticated you have to login in using a valid username and password if you do not have one you can create on in sign up

The Private routes are:
 + Upcoming Movie Page
 + Top Rated Movies Page 
 + Favorites
 + Movies Details Page


## Integrating with React App

I intergrated my React app from assignmnet 1 this mean't adding a proxy for the port 8080 and changing the app to use my api instead And also intergrating the mongo login system we made in the labs. 

~~~Javascript

export const getTopRatedMovies = () => {
    return fetch(
       '/api/movies/toprated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

## Extra features

 + Favorites
 + Simalr Movies
 + Credits  
