//Link 2 class
class fatherName {
  constructor() {
    this.fatherName = "AF Fathers";
  }
}
class child extends fatherName {
  constructor(Cname, Cage) {
    super();
    this.name = Cname;
    this.age = Cage;
  }
}

const child1 = new child("Arnold", 13);
const child2 = new child("Fedwrick", 09);
console.log(child1, child2);
