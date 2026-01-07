//apply method
const studentinfo = {
  studentdetails: function (qualification, branch) {
    return (
      this.rollno + " " + this.studentname + " " + qualification + " " + branch
    );
  },
};
const student = {
  rollno: 580,
  studentname: "smiley",
};
console.log(studentinfo.studentdetails.apply(student, ["btech", "cse"]));
