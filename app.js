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
async function searchGif(userInput) {
    const gif = await fetch(`${endPoint}?api_key=${apiKey}&s=${userInput}`, {mode: 'cors'});
    const json = await gif.json();
    img.src = json.data.images.original.url;
}
