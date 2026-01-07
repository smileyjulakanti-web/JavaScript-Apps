// Arrays in JS
const demoarray = [10, 20, "siva", "smiley"];
{
  console.log(demoarray);
}
//literal Syntax
const pName = ["realme", "vivo", "oppo", "samsung"];
{
  console.log(pName);
}
//object syntax
let prices = new Array(20000, 40000, 30000, 50000);
//to get values
console.log(pName[3]);

// for each method
let productnames = pName.forEach((value) => {
  //callback function ie arrow inside the method
  console.log(value);
});

//to add elements into array : push , unshift , splice methods
pName.push("oneplus"); //push to add at end
console.log(pName);
pName.unshift("poco"); //unshift to add at end
console.log(pName);
pName.splice(2, 0, "lg", "moto"); //splice to add at middle
console.log(pName);

//To remove elements in array:pop,shift,splice methods
pName.pop();
console.log(pName);
pName.unshift();
console.log(pName);
pName.splice(5, 1);

//sort
console.log(pName.sort());
//reverse
console.log(pName.reverse());
//to update
pName[2] = "motopro";
console.log(pName);
//concatenation
let pnames1 = ["iphone", "nokia"];
console.log(pName.concat(pnames1));

// spread
let productname = [...pName, ...pnames1];
console.log(productname);

//array advanced methods
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
console.log(sum);

//map
let offerprice = prices.map((val) => {
  return val - 2000;
});
console.log(offerprice);
