//promises demo
const movierating = new Promise((resolve, reject) => {
  let rating = 3;
  if (rating > 4) {
    resolve("Goodmovie");
  } else {
    reject("waste of time");
  }
});
//to call promises or to execute promises
movierating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
