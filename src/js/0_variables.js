'use strict';

const listCharacteres = document.querySelector('.js-section-list');
const btnSearch = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const listFav = document.querySelector('.js-fav-list');
const resetGlobal = document.querySelector('.js-reset');

let characteres = [];
let favouriteCharacteres = [];

// ESTO PASA AL CARGAR LA PAGINA

fetch('./assets/data/data.json')
  .then((response) => response.json())
  .then((dataResult) => {
    characteres = dataResult;
    paintcharacteres(characteres);
    console.log(characteres);
  });

let savedFavourites = JSON.parse(localStorage.getItem('favoroutecharacteres'));
if (savedFavourites !== null) {
  favouriteCharacteres = savedFavourites;
  paintcharacteresfav(favouriteCharacteres);
}
// mm
