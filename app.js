'use strict';

const img = document.querySelector('img');
const searchBar = document.getElementById('js-search');
let userInput;

searchBar.onsearch = () => { 
    userInput = searchBar.value;
    searchGif(userInput);
}

const endPoint = 'https://api.giphy.com/v1/gifs/translate';
const apiKey = 'Y2AHOQRuoZGY2cWPNRDIPwIPq75uWmSc';
function searchGif(userInput) {
    return fetch(`${endPoint}?api_key=${apiKey}&s=${userInput}`, {mode: 'cors'})
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
    })
}
