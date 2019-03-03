const PubSub = require("../helpers/pub_sub")
const RequestHelper = require("../helpers/request_helper");

const GhibliPeople = function () {
  this.people = null;
};

GhibliPeople.prototype.bindEvents = function () {
  // PubSub.subscribe("GhibliFilms:selected-film-ready", (evt)=>{
  //   filmTitle = evt.detail.title;
  //   // console.log(evt.detail.title);
  //
  //
  //   PubSub.publish("GhibliPeople:selected-film-people-ready", selectedFilm);

  // })
};

GhibliPeople.prototype.getData = function (filmPeople) {

    const people = filmPeople.map((person) => {
    const url = person
    // console.log(person);
    const request = new RequestHelper(url);

    // console.log(person);
    return request.get()

  })
  return Promise.all(people)
    // .catch((error) => console.error(error));
};

module.exports = GhibliPeople;

// loop through film's people and getData for each api
// add to peoples object
