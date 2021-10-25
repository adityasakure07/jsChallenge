function emp(name,title,salary){
    this.name = name;
    this.title = title;
    this.salary = salary;
}


emp.prototype.slogan = function() {
    return `this is slogan ${this.name}`;
}

let ad = new emp("aditya","SE","1");

console.log(ad.slogan())

//inheritance

function  programmer (name,title,salary,lang){
    emp.call(this,name,title,salary)
    this.lang = lang;

}
programmer.prototype = Object.create(emp.prototype)

programmer.prototype.constructor = programmer;

let boss = new programmer("BOSS","SE","1","java");
console.log(boss);
console.log(boss.slogan())

