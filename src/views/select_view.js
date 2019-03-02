const PubSub = require("../helpers/pub_sub");

const SelectView = function (element) {
  this.selectView = element;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("GhibliFilms:all-films-ready", (evt) => {
    films = evt.detail;
    films.forEach((film, index) => {
      const option = document.createElement("option");
      option.textContent = film.title;
      option.value = index;
      this.selectView.appendChild(option);
    })
  })
};


module.exports = SelectView;
