'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

        while (!this.count || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних фильмов?', '').trim();
            const raiting = prompt('На сколько оцените его?', '');
            if (!raiting || !film || film.length > 50) {
                console.log('Ответ не должен быть пустым или содержать более 50 символов');
                i--;
                continue;
            }
            this.movies[film] = raiting;
        }
    },
    detectPersonalLevel() {
        if (this.DB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres() {
        // for (let i = 0; i < 3; i++) {
        //     let answer = prompt(`Ваш любимый жанр под номером ${i+1}`);
        //     if (!answer || answer === '') {
        //         console.log('Вы ввели некоректные данные или не ввели их вовсе');
        //         i--;
        //         continue;
        //     }
        //     this.genres[i] = answer;
        // }
        // this.genres.forEach((item, index) => {
        //     console.log(`Любимый жанр #${index + 1} - это ${item}`);
        // });
        let answer;
        do {
            answer = prompt('Введите Ваши любимые жанры через запятую').toLowerCase();
        } while (!answer || answer === '');
        this.genres = answer.split(',').map(item => item.trim());
        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB() {
        this.privat = !this.privat;
    }
};