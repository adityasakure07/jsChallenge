// console.log("callbacks ")


// const student = [

// {
//     name: "Aditya", subject: "JS"
// },

// {
//     name: "kunal", subject: "JS"
// }

// ]


// console.warn("This is Warning")
// console.error("This is Error")
// console.assert(1<2, "This is assert")


// const myfunction = ()=> {
//     console.log("my function");

// }

// myfunction();


// arr = ["apple","banana"];

// array = [1,2,3,4,5]
// arr.forEach((ele,index,) => {
//     console.log(ele,index)
    
// });

// let a= document.querySelector;
// console.log(document.querySelector);

// Array.from(a).forEach(
//     function(ele){
//         console.log(ele);
//     }
// )

// class book{
//     constructor(name1,auther1){
        
//         this.name = name1;
//         this.auther = auther1;
      

//     }

//     displayBook(book_obj){
        
//     }

//     displayBook(book_obj){
//         console.log(book_obj)
//     }
// }


// let book1 = new book("adit","padi");

// book1.displayBook(book1);

// console.log(a)

//  let a = document.links;

//  console.log(a);

//  Array.from(a).forEach(
//      (ele)=>{
//         console.log(ele.href)
//      }
//  )

// a = document.querySelectorAll('div');


// console.log(a);

// a = document.querySelector('.container');
// a.childNodes;
// console.log(a.childNodes);

// console.log(a.children)


// let element = document.createElement('div');
// let text = document.createTextNode("This is Aditya from Text Node");
// element.className = 'chilli';
// element.id = 'childid';

// // element.innerText = "Hi this Adutya"
// element.appendChild(text);


// let divSelector = document.querySelector('#web_body');

// divSelector.appendChild(element)


// console.log(divSelector);


//Exercise
let h1 = document.createElement('h1');
let text = document.createTextNode("Go To Code With Harry");
h1.appendChild(text);

let BodyDiv = document.querySelector('#web_body');
BodyDiv.append(h1); 

let link = document.createElement('a');
let textNodeLink = document.createTextNode("www.google.com");
link.setAttribute('href', "https://www.google.com");
link.appendChild(textNodeLink);

BodyDiv.appendChild(link);
