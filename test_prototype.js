console.log("this is test")




// function Particle(x,y){
//     this.x =x ;
//     this.y = y;

//     // this.show = function(){
//     //     console.log(x,y);
//     // }
// }

// Particle.prototype.show = function(){
//     console.log(this.x,this.y);
// }

// function ChildParticle(z){
//     this.z  = z;
// }

// let p1 = new Particle(100,200);
// p1.show();

// let p2 = new Particle(102,204);
// p2.show();

// //putting fuction to object proto

// function Con(){
//     Particle.call(this,80,90);
// }
// Con.prototype = Particle.prototype;

// let c = new Con();
// console.log(p1);
// console.log(c);
// // c.show();


function Particle(x,y){
    this.x=x;
    this.y=y;
}


Particle.prototype.show = function(){
    // console.log('from Particle');
    // console.log(this.x,this.y);
    console.log(this.x,this.y)

}

Particle.prototype.update = function(){
    // console.log('from Particle');
    // console.log(this.x,this.y);
    console.log(++this.x,this.y++)

}

function newParticle(z,x,y){
    this.z = z;
    Particle.call(this,x,y);
}
newParticle.prototype = Object.create(Particle.prototype);


newParticle.prototype.show = function(){
    console.log(this.z);
}


let p = new Particle(10,20);

console.log(p)
p.show();
p.update();

let pn = new newParticle(10,200,300);
pn.show();
pn.update();



console.log(pn);

// fetch('https://fakestoreapi.com/products/')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

