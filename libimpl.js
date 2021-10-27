class Book {
  constructor(name, auther) {
    this.name = name;
    this.auther = auther;
  }
}

class Library {
  constructor() {
    this.bookStore = [];
  }

  addBook(Book) {
    this.bookStore.push(JSON.stringify(Book));
    console.log("Book Added", this.bookStore);
  }
  searchBook(str) {
    Array.from(this.bookStore).forEach((element) => {
      // if(element.name)
      if (JSON.parse(element).name.includes(str))
        console.log(JSON.parse(element).name);
    });
  }
}

let book = new Book("first Book", "Jame");
let book2 = new Book("Second Book", "Jame");
let lib = new Library();
lib.addBook(book);
lib.addBook(book2);

lib.searchBook("Second");
