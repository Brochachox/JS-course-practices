'use strict';

let numberOfFilms = '';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

    personalMovieDB.count = numberOfFilms;
}



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        if (a != '' && a != null && a.length < 50) {
            for (let j = 0; j < 1; j++) {
                let b = prompt('На сколько оцените его?', '');
                if (b != '' && b != null && !isNaN(b)) {
                    personalMovieDB.movies[a] = b;
                    console.log('ok!');
                } else if (isNaN(b) && b != '' && b != null) {
                    alert('оценка не должна содержать буквы или символы');
                    j--;
                } else {
                    alert('оценка не должна быть пустой');
                    j--;
                }
            }
        } else {
            i--;
            alert('название не должно быть пустым или длинее 50 символов');
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let i = 0;
    let genre;
    while (i < 3) {
        genre = prompt(`ВВедите ваш любимый жанр под номером ${i + 1}`);
        if (genre != '' && genre != null && isNaN(genre)) {
            personalMovieDB.genres[i] = genre;
            i++;
        }
    }
}


start();
writeYourGenres();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);

