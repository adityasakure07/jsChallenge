console.log("ES6");

class Employee {
  constructor(name, exp, div) {
    this.name = name;
    this.exp = exp;
    this.div = div;
  }

  getName(){
      return `My Name is ${this.name}`;
  }

  static add(a,b){
      return a+b;
  } 
}

let emparr = [];

let aditya = new Employee("adi",4,"Act")
emparr.push(JSON.stringify(aditya));
let h1 = new Employee("k",4,"Act")
emparr.push(JSON.stringify(h1));
console.log(aditya)
console.log(emparr);
console.log(aditya.getName());
console.log(h1.getName());

class Programmer extends Employee{
    constructor(name, exp, div,lang){
        super(name, exp, div);
        this.lang = lang;
    }
   
}
let boss = new Programmer("boss",6,"boss1","JS");

console.log(boss.getName());