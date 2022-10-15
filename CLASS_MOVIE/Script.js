// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie {
    constructor(rating = "PG", title, studio) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG() {
        const movies = [...arguments];
        return movies.filter(m => m.rating.toUpperCase().includes("PG"));
    }
}
const m1 = new Movie();
console.log("Movie created with no params:", m1);
const m2 = new Movie("R");
console.log("Movie created passing rating:", m2);
const pgMovies = Movie.getPG(m1, m2);
console.log("Movies with PG rating :", pgMovies);
const customMovie = new Movie("PG­13", "Casino Royale", "Eon Productions");
console.log("Movie by passing all params :", customMovie);