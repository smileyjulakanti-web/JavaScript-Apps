//for  defining multi lines of strings we use backtick `
let desc = `Top college in AP
more recurietments
support for many activities`;
console.log(desc);

//string interpolation
let firstName = "smiley";
let lastName = "julakanti";
console.log(`${firstName} ${lastName}`);

//array destructing
let pnames = ["realme", "lg", "vivo"];
let [Brand1, Brand2, Brand3] = pnames;
console.log(Brand1);
console.log(Brand2);
console.log(Brand3);
//object destructing
const movieInfo = {
  movie: "bhaubali",
  director: "rajamouli",
  producer: "shobu",
};
let { movie, director, producer } = movieInfo;
console.log(movie);
console.log(director);
console.log(producer);

