const PubSub = require("../helpers/pub_sub")
const RequestHelper = require("../helpers/request_helper");

const GhibliFilms = function () {
  this.films = null;
};

GhibliFilms.prototype.getData = function () {
  const url = `https://ghibliapi.herokuapp.com/films`;
  const request = new RequestHelper(url);

  request.get()

    .then((data) => {
      this.films = data;
      // console.log(this.films);
      PubSub.publish("GhibliFilms:all-films-ready", this.films);
    })
    .catch((error) => console.error(error));
};

module.exports = GhibliFilms;
