'use strict';

const KEY = 'PROJS';

var gProjs;
createProjs();

//C.R.U.D.L
function getAllProjs() {
    return gProjs;
}

function getProjById(projId) {
    return gProjs.find(function (proj) {
        return proj.id === projId;
    });
}

// create projs
function createProjs() {
    gProjs = loadFromStorage(KEY);
    if (!gProjs || !gProjs.length) {
        gProjs = [];
        gProjs.push(createProj(
            'Minesweeper',
            'Gotta flag\'em all',
            'Find all the mines using the number surrounded by neighbours, and flag them. Do not step on a mine!',
            'https://eladbecker.github.io/minesweeper/',
            './img/minesweeper.jpg',
            ['Minesweeper', 'Game', 'Web', 'Sprint', 'CaJul-2020']
        ));
        gProjs.push(createProj(
            'Book Shop',
            'CRUDL exercise',
            'a table that gets details of all books in shop from local storage, and applies CRUDL for the shop owner',
            'https://eladbecker.github.io/book-shop/',
            './img/book-shop.jpg',
            ['JS', 'CRUDL', 'Web', 'CaJul-2020']
        ));
        saveToStorage(KEY, gProjs);
    }
}

function createProj(name, title, desc, url, imgUrl, labels) {
    return {
        id: makeId(),
        name,
        title,
        desc,
        url,
        imgUrl,
        publishedAt: Date.now(),
        labels
    };
}