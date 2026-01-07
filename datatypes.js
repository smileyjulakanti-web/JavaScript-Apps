//datatypes.js
var empid = 200;
console.log(typeof empid); //number
var esalary = 40000.99;
console.log(typeof esalary);
var mobilenumber = 9988776655;
console.log(typeof mobilenumber);
var ename = "smiley";
console.log(typeof ename); //string
var pemp = false;
console.log(typeof pemp); //boolean
var pf = null;
console.log(typeof pf); //object
var esi;
console.log(typeof esi); //undefined
var empdesg = ["developer", "tester", "manager"];
console.log(typeof empdesg); //object
var custinfo = {
  cname: "smiley",
  cage: 25,
  caddress: "guntur",
};
console.log(typeof custinfo); //object
//ES 6 new datatype
var tcsturnover = BigInt(45345678923456789);
console.log(typeof tcsturnover);

var pname = Symbol("realme");
var pname1 = Symbol("realme");
console.log(typeof pname1);
console.log(typeof pname);
