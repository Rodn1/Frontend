"use strict"
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели",'');

// alert(numberOfFilms);
const personalMovieDB  = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i=0; i>2;i++) {
    const a= prompt('Один из просмотренный фильмов?',''),
          b= prompt('На сколько вы его оценили?','');
    if (a != null && b != null && a!='' && b!='' && a.length < 50) {
        personalMovieDB.movies[a]= b;
        console.log('done1')
    }
    else

    personalMovieDB.movies[a]= b;
}

console.log(personalMovieDB);




// if (4==9) {
//     console.log("Error")
// }
// else {
//     console.log('Ok!')
// }
//
// const John = 50;
// switch (John) {
//     case 49:
//         console.log('Alles ok');
//         break;
//     case 51 :
//         console.log('falsche');
//         break;
//     default:
//         console.log('rest')
//         break;
// }


