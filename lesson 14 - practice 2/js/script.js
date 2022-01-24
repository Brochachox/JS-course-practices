'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    if (a != '' && a != null && a.length < 50) {
        for (let j = 0; j < 1; j++) {
            let b = prompt('На сколько оцените его?', '');
            if (b != '' && b != null) {
                personalMovieDB.movies[a] = b;
                console.log('ok!');
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

if (personalMovieDB.count < 10) {
    alert('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('ви обычный зритель');
} else if (personalMovieDB.count >= 30) {
    alert('вы настоящий киноман!');
} else {
    alert('error');
}

console.log(personalMovieDB);