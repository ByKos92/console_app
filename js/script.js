'use strict';

const numbersOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const film = prompt('Один из последних фильмов?', '');
    const raiting = prompt('На сколько оцените его?', '');
    if (!raiting || !film || film.length > 50) {
        console.log('Ответ не должен быть пустым или содержать более 50 символов');
        i--;
        continue;
    }
    personalMovieDB.movies[film] = raiting;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);