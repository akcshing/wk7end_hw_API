const BasicFilmView = require("./basic_film_view");
const GhibliPeople = require("../models/ghibli_people");
const PubSub = require("../helpers/pub_sub");

const FullFilmView = function(filmAndPeople) {
  this.data = filmAndPeople
};


FullFilmView.prototype.render = function () {

  const basicFilmView = new BasicFilmView(this.data.film);
  const basicRenderContainer = basicFilmView.render();

  const peopleHeader = document.createElement("h3");
  peopleHeader.textContent = "Characters"
  basicRenderContainer.appendChild(peopleHeader);

  const peopleList = document.createElement("ul");
  this.data.people.forEach( (person) => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    peopleList.appendChild(listItem);
  });

  basicRenderContainer.appendChild(peopleList);
  return basicRenderContainer;
};



module.exports = FullFilmView;
