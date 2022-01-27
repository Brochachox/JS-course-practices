'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        let count = personalMovieDB.count;
        count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (count == '' || count == null || isNaN(count)) {
            count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = count;
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleNyDB: function (visibility) {
        if (visibility) {
            personalMovieDB.private = false;
        } else if (!visibility) {
            personalMovieDB.private = true;
        } else {
            console.log('error');
        }
    },
    writeYourGenres: function () {
        let i = 0;
        let genres;
        /*
        while (i < 3) {
            genre = prompt(`ВВедите ваш любимый жанр под номером ${i + 1}`);
            if (genre != '' && genre != null && isNaN(genre)) {
                personalMovieDB.genres[i] = genre;
                i++;
            }
        }*/

        while (i < 1) {
            genres = prompt(`ВВедите ваши любимые жанры через запятую`);
            if (genres != '' && genres != null && isNaN(genres)) {
                personalMovieDB.genres = genres.split(', ');
                i++;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        });
    }
};

//personalMovieDB.start();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleNyDB(personalMovieDB.private);
//console.log(personalMovieDB.private);
//console.log(personalMovieDB.showMyDB(personalMovieDB.private));








