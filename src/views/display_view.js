const PubSub = require("../helpers/pub_sub");
const FilmView = require("./film_view");

const DisplayView = function(element) {
  this.displayElement = element
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("GhibliFilms:all-films-ready", (evt) => {
    films = evt.detail;
    // console.log(films);
    this.render(films);
  })


};

DisplayView.prototype.render = function (films) {

  this.displayElement.innerHTML = "";

  films.forEach((film) => {
    filmView = new FilmView(film);
    filmRender = filmView.render();
    this.displayElement.appendChild(filmRender);
  })




};

module.exports = DisplayView;
