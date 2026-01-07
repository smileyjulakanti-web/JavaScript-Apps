//function in js
function showMessage() {
}
showMessage();

//function with parameters
function sumnums(a, b) {
console.group("sum is: " + (a + b));
}
sumnums(10, 20); //arguments

//function with return value
//mul num
function mulnums(c, d) {
return c * d;
}
//let result = mulnums(45, 55);
//console.log("product is:" + result);

//new function syntax in es6
//arrow function
//const arrowDemo = () => {
//console.log("arrow functionDemo");
//};
//arrowDemo();

//arrow function with parameters
const addnums = (a, b) => {
  console.log("addition is:" + (a + b));
};
addnums(44, 25);

//in a simple way(only for a single line of statement)
const addnums1 = (a, b) => a + b;
addnums1(44, 25);
console.log(addnums1(23, 56));

//arrow function with return value
const mulnum = (d, c) => d * c;
let res = mulnum(48, 45);
console.log("product is:" + res);
