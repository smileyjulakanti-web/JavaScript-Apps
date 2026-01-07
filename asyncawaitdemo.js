//asyn await demo
const movieresult = () => {
  return (movierating = new Promise((resolve, reject) => {
    let rating = 3;
    if (rating > 4) {
      resolve("Goodmovie");
    } else {
      reject("waste of time");
    }
  }));
};
//calling promise with async await methods
const result = async () => {
  try {
    const res = await movieresult();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
result();
