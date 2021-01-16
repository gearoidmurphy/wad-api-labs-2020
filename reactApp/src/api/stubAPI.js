class StubAPI {
    constructor() {
        this.favouriteMovies = [];

    }

    add(movie) {
        this.favouriteMovies.push(movie);

    }


   getAll() {
        return this.favouriteMovie;
    }

}
export default new StubAPI();