console.log('storage')

localStorage.setItem('name','Aditya')

localStorage.removeItem('namea');

localStorage.setItem('name2','Adi')
console.log(localStorage)

//localStorage.clear()

let arr = ['apple','babana'];
localStorage.setItem('frt',JSON.stringify(arr));
console.log(localStorage.getItem('frt'));
console.log(typeof(localStorage.getItem('frt')));
console.log(JSON.parse(localStorage.getItem('frt')));

// console.log(JSON.stringify(arr));