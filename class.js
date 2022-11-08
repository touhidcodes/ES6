// Create a property function by Class
class student {
  constructor(sName, sID, sSchool) {
    this.name = sName;
    this.id = sID;
    this.school = "BSMRSTU";
  }
}
const touhid = new student("Touhid", 24);
const toufik = new student("Toufik", 05);
const jannatul = new student("Jannatul", 12);

console.log(touhid, toufik, jannatul);

class student {
  constructor(sName, sID) {
    this.name = sName;
    this.id = sID;
    this.school = "BSMRSTU";
  }
}
