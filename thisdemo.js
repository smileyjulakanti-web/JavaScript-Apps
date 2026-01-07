//this keyword used to represent the current object
const empinfo = {
  firstname: "smiley",
  lastname: "julakanti",
  empdetails: function () {
    return this.firstname + " " + this.lastname;
  },
};
console.log(empinfo.empdetails());
