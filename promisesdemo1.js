const bubbleScore = new Promise((resolve, reject) => {
  //to generate random number we  use
  let Num = Math.floor(Math.random() * 10) + 1;
  if (Num >= 5) {
    resolve("high score");
  } else {
    reject("low score");
  }
});
//to call promises or to execute promise
bubbleScore
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
