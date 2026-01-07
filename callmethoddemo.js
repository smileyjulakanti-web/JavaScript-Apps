//call method
const proinfo = {
  prodetails: function (rating, price) {
    return this.pid + "" + this.pname + "" + rating + "" + price;
  },
};
const product = {
  pid: 1001,
  pname: "iphone",
};
console.log(proinfo.prodetails.call(product, (4, 500000)));
