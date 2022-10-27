'use strict';

let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (!numbersOfFilms || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних фильмов?', '').trim();
        const raiting = prompt('На сколько оцените его?', '');
        if (!raiting || !film || film.length > 50) {
            console.log('Ответ не должен быть пустым или содержать более 50 символов');
            i--;
            continue;
        }
        personalMovieDB.movies[film] = raiting;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);