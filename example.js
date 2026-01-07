//rest parameter
const nums = (a, b, ...c) => {
  //keeping the value in the rest of the parameter
  console.log(a);
  console.log(b);
  console.log(c);
};
nums(23, 67, 68, 456);

//default parameters
const addNums = (c = 20, d) => {
  console.log(c + d);
};
addNums(10);
