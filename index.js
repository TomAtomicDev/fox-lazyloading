import {registerElement} from "./lazy.js";

const addImgButton = document.getElementById('mybutton');
const removeButton = document.getElementById('mybutton-2');
const root = document.getElementById('root');

function randomInteger (min, max) {
    const generated = Math.random();
    const floatingRandom=  min + generated*(max-min);
    return Math.floor(floatingRandom);
}

function createImage () {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.dataset.src = `https://randomfox.ca/images/${randomInteger(1, 122)}.jpg`;
    container.appendChild(img);
    return container;

};

function addImage (){
    const newImg = createImage();
    root.appendChild(newImg);
    registerElement(newImg);
    addedCounter+=1;
    printCounters();
};

function removeImages () {
    while (root.firstChild){
        root.removeChild(root.firstChild)
    }
    loadedCounter = 0;
    addedCounter = 0;
    console.clear();
};

addImgButton.addEventListener('click', addImage);

removeButton.addEventListener('click', removeImages);

