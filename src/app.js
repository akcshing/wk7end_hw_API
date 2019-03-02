const GhibliFilms = require("./models/ghibli_films");
const DisplayView = require("./views/display_view");
const SelectView = require("./views/select_view");


document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded");

  const displayElement = document.querySelector("#display-section")
  const displayView = new DisplayView(displayElement);
  displayView.bindEvents();

  const selectElement = document.querySelector("#film-select")
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const ghibliFilms = new GhibliFilms();
  ghibliFilms.bindEvents();
  ghibliFilms.getData();

});
