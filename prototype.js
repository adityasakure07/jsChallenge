console.log("Prototype")

let obj = {
    name: "Aditya", 
    title: "Software Engineer"
}

console.log(obj)

function Obj(name){
    this.name = name;

}

Obj.prototype.getName = function (){
    return this.name;
}


Obj.prototype.setName = function(new_name){
    console.log(`changing name from ${this.name} to ${new_name}`)
    this.name = new_name;
}



let obj2 = new Obj("Aditya");
console.log(obj2);

console.log(obj2.getName());
obj2.setName("Boss");
console.log(obj2.getName());

