const PubSub = require("../helpers/pub_sub");

const DisplayView = function(element) {
  this.displayElement = element
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("GhibliFilms:all-films-ready", (evt) => {
    films = evt.detail;
    console.log(films);
  })
};

module.exports = DisplayView;
