//bind method
const movieinfo = {
  heroname: "ntr",
  villanname: "prakash",
  moviedetails: function () {
    return this.heroname + " " + this.villanname;
  },
};
const bahubali = {
  heroname: "prabhas",
  villanname: "rana daggubati"
};
const movieresult = movieinfo.moviedetails.bind(bahubali);
console.log(movieresult());
