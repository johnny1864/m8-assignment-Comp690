//STEP 1

let movieArr = ["The Matrix", "Dune", "Avatar", "Godzilla", "King Kong"];

console.log(movieArr[1]);

//STEP 2

let movies = new Array(5);
movies[0] = "The Matrix";
movies[1] = "Dune";
movies[2] = "Avatar";
movies[3] = "Godzilla";
movies[4] = "King Kong";

console.log(movies[0]);

//STEP 3

let movies2 = new Array(5);
movies2[0] = "The Matrix";
movies2[1] = "Dune";
movies2[2] = "Avatar";
movies2[3] = "Die Hare";
movies2[4] = "Godzilla";
movies2[5] = "King Kong";

console.log(movies2.length);

//STEP 4

let moviesArr2 = ["The Matrix", "Dune", "Avatar", "Godzilla", "King Kong"];
delete moviesArr2[0];

console.log(moviesArr2);
//STEP 5

let moviesArr3 = ["The Matrix", "Dune", "Avatar", "Godzilla", "King Kong", "Jaws", "Fallout"];

for(let movie in moviesArr3){
    console.log(moviesArr3[movie]);
}

//STEP 6
moviesArr3 = moviesArr3.sort();
for (let i of moviesArr3) {
    console.log(i);
}

//STEP 7

for (let i of moviesArr3) {
    console.log(i);
}

//STEP 8

let leastFavMovies = ["Notebook", "Battleship", "Starwar Episode 3"];

console.log("Movies I like: \n", "\n");
for (let movie of moviesArr3) {
    console.log(movie);
}

console.log("Movies I regret watching: \n", "\n");
for (let movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9
moviesArr3 = moviesArr3.concat(leastFavMovies).sort().reverse();
console.log(moviesArr3);

//STEP 10

let lastMovie = moviesArr3.pop();
console.log(lastMovie);

//STEP 11

let firstMovie = moviesArr3.unshift();
console.log(firstMovie);

//STEP 12


//STEP 13



//STEP 14

//STEP 15

//STEP 16

//STEP 17