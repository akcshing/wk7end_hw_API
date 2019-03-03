const PubSub = require("../helpers/pub_sub")
const RequestHelper = require("../helpers/request_helper");
const GhibliPeople = require("../models/ghibli_people");

const GhibliFilms = function () {
  this.films = null;
};

GhibliFilms.prototype.bindEvents = function () {
  PubSub.subscribe("SelectView:select-change", (evt)=>{
    filmIndex = evt.detail;
    const selectedFilm = this.films[filmIndex];
    const ghibliPeople = new GhibliPeople();
    ghibliPeople.getData(selectedFilm.people)
    .then(
      (people) => {
        console.log(people);
        const filmAndPeople = {film: selectedFilm, people: people}
        PubSub.publish("GhibliFilms:selected-film-ready", filmAndPeople);
    })
  })

};

GhibliFilms.prototype.getData = function () {
  const url = `https://ghibliapi.herokuapp.com/films`;
  const request = new RequestHelper(url);

  request.get()

    .then((data) => {
      this.films = data;
      PubSub.publish("GhibliFilms:all-films-ready", this.films);
    })
    .catch((error) => console.error(error));
};

module.exports = GhibliFilms;
