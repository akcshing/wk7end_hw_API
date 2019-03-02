const GhibliFilms = require("./models/ghibli_films");

document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded");

  const ghibliFilms = new GhibliFilms();
  ghibliFilms.getData();
});
