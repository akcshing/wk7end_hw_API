const PubSub = require("../helpers/pub_sub");
const BasicFilmView = require("./basic_film_view");
const FullFilmView = require("./full_film_view");

const DisplayView = function(element) {
  this.displayElement = element
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("GhibliFilms:all-films-ready", (evt) => {
    films = evt.detail;
    // console.log(films);
      this.basicRenderAll(films);
  });


  PubSub.subscribe("GhibliFilms:selected-film-ready", (evt)=>{
    filmAndPeople = evt.detail;
    this.displayElement.innerHTML = "";
    this.fullRender(filmAndPeople);
  })


};


DisplayView.prototype.fullRender = function (filmAndPeople) {
  fullFilmView = new FullFilmView(filmAndPeople);
  filmAndPeopleRender = fullFilmView.render();
  this.displayElement.appendChild(filmAndPeopleRender);
};

DisplayView.prototype.basicRenderAll = function (film) {

  films.forEach((film) => {
    basicFilmView = new BasicFilmView(film);
    filmRender = basicFilmView.render();
    this.displayElement.appendChild(filmRender);
  })
};

module.exports = DisplayView;
