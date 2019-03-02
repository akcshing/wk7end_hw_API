const GhibliFilms = require("./models/ghibli_films");
const DisplayView = require("./views/display_view");


document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded");

  const displayElement = document.querySelector("#display-section")
  const displayView = new DisplayView(displayElement);
  displayView.bindEvents();



  const ghibliFilms = new GhibliFilms();
  ghibliFilms.getData();

});
