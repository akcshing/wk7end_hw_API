const FilmView = function(film){
  this.film = film

};

FilmView.prototype.render = function () {
  const filmContainer = document.createElement("div")

  const filmTitle = document.createElement("h2");
  filmTitle.textContent = this.film.title;
  filmContainer.appendChild(filmTitle);

  const filmDescription = document.createElement("p");
  filmDescription.textContent = this.film.description;
  filmContainer.appendChild(filmDescription);

  const filmDetails = document.createElement("ul");
  filmContainer.appendChild(filmDetails);

  const filmDirector = document.createElement("li");
  filmDirector.textContent = `Director: ${this.film.director}`;
  filmDetails.appendChild(filmDirector);

  const filmDate = document.createElement("li");
  filmDate.textContent = `Release Date: ${this.film.release_date}`;
  filmDetails.appendChild(filmDate);

  const filmRating = document.createElement("li");
  filmRating.textContent = `Rotten Tomato Score: ${this.film.rt_score}%`;
  filmDetails.appendChild(filmRating);

  return filmContainer;

};

module.exports = FilmView;
