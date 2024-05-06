'use strict';

const img = document.querySelector('img');
const searchBar = document.getElementById('js-search');
let userInput;

searchBar.onsearch = () => { 
    // prevent whitespace/s & unwanted search
    if (searchBar.value.trim()) { 
        userInput = searchBar.value;
        searchGif(userInput);
        displayLoading();
    }
}

const endPoint = 'https://api.giphy.com/v1/gifs/translate';
const apiKey = 'Y2AHOQRuoZGY2cWPNRDIPwIPq75uWmSc';
async function searchGif(userInput) {
    const gif = await fetch(`${endPoint}?api_key=${apiKey}&s=${userInput}`, {mode: 'cors'});
    const json = await gif.json();
    try {
        img.src = json.data.images.original.url;
    } catch (error) {
        const errorImg = './assets/something-went-wrong.gif';
        console.log(error);
        img.src = errorImg;
    }
}

const loadingGif = './assets/loading.gif';
function displayLoading() {
    img.src = loadingGif;
}

const imgPlaceholder = './assets/placeholder.png';
window.onload = () => {
    img.src = imgPlaceholder;
}
