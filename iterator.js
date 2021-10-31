console.log("This is iterator");

const arr = ["apple", "banana", "kivi"];


//implementation of iterator in Javascript
function frtItrt(value) {
  let nextIdx = 0;
  return {
    next: () => {
          if (nextIdx < value.length) {
              // we will return below object
              return {
                  value: value[nextIdx++],
                  done: false,
              };
          } else {
              return {
                  done: true,
              };
          }
      },
  };
}

// using iterator

const fruits  = frtItrt(arr);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next());


