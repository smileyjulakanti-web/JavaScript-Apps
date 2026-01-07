//objects in js
const movieInfo = {
  moviename: "akanda2",
  heroname: "balayya",
  directorname: "boyapati",
};
//how to get a specific property
console.log(movieInfo.directorname);
//other way
console.log(movieInfo["heroname"]);
//for getting all values we use for in loop
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}

//ES-6 + new features
//method=object.keys
Object.keys(movieInfo).forEach((keys) => {
  console.log(keys);
});
//to get only values
//method=object.values
Object.values(movieInfo).forEach((values) => {
  console.log(values);
});
//to get both the key and values
//method name is object.entries
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]); //+ is used for space
});
//using for off
for (let [info, infovalue] of Object.entries(movieInfo)) {
  console.log(info + " " + infovalue);
}
//nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
//to print only models we use
console.log(myObj.cars[0].models);
//cart object
const placedOrder = {
  products: [
    { pid: 10001, pname: "drone", price: 10000 },
    { pid: 1002, pname: "AC", price: 40000 },
  ],
  shippingaddress: {
    area: "vadlamudi",
    street: "tenali",
    pincode: 522113,
  },
  userInfo: {
    uid: "1003",
    uname: "smiley",
  },
};
//to print only username
console.log(placedOrder.userInfo.uname);
