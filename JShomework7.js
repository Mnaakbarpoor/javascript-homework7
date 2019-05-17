class Movie {
    constructor(title, director) {
      // add your code here
      this.title =title;
      this.director = director;
      this.stars = [];
      this.writers = [];
      this.ratings = [];
    }
  
    getTitle() {
      // add your code here
      return console.log(this.name);
    }
  
    getDirector() {
      // add your code here
      return console.log(this.director);
    }
  
    addStar(star) {
      // add your code here
      this.stars.push(star);
    }
  
    getStars() {
      // add your code here
      return this.stars;
    }
  
    addWriter(writer) {
      // add your code here
      this.writers.push(writer);

    }
  
    getWriters() {
      // add your code here
      return console.log(this.writers);
    }
  
    addRating(rating) {
      // add your code here
      this.ratings.push(rating);

    }
  
    getAverageRating() {
      // add your code here
      return console.log(this.ratings);
    }

    
  // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
    // add your code here
    this.name = name;
    this.addMovie.role = role;
    this.dateOfBirth = new Date(dateOfBirth);
    this.movies = []
  }

  addMovie(movie) {
    // add your code here
    this.movies.push(movie);
  }

  getName() {
    // add your code here
    return console.log(this.name);
  }

  getRole() {
    // add your code here
    return console.log(this.role);
  }

  getAge() {
    // add your code here
    let year = new Date().getFullYear();
    let age = year - this.dateOfBirth.getFullYear();
    return console.log(age);
  }
  showAllMovie(){
    this.movie.map(movies => console.log(movies))
  }
};

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie("the venum" , "http://www.imdb.com/");

const firstActor = new StaffMember( 'eddy ', 'venum' , "01/01/01");
myMovie.addStar('***');
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor}`));

console.log(firstActor.getName());

const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);





