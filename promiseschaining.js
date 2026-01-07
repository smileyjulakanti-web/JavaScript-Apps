//promises chaining
const bookticket = () => {
  return new Promise((resolve, reject) => {
    resolve("ticket booked");
  });
};
const getpopcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "sucess");
  });
};
const getcoke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "ready with coke");
  });
};
//to execute
bookticket()
  .then((result) => {
    return getpopcorn(result);
  })
  .then((result) => {
    return getcoke(result);
  })
  .then((result) => {
    console.log("wanna to go movie date!!" + result);
  })
  .catch((error) => {
    console.log(error);
  });
