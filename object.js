console.log("Objects")

//Object Literal
let car = {
    name: "vw polo",
    topSpeed: 140,
    run: ()=>{
        console.log("Car is running");
    }

}

console.log(car);

//constructor 

function GeneralCar(name,speed){
    this.name = name;
    this.speed= speed;

    this.run  = ()=>{
        console.log(`${this.name} is running at speed ${this.speed}`);
    }

}

let new_car = new GeneralCar("Audi",180);
let new_car_2 = new GeneralCar("BMW",900);

// let cars = [];
// cars.push(JSON.stringify(new_car));
// cars.push(JSON.stringify(new_car_2));


console.log(cars);
console.log(new_car.run())




console.log()

