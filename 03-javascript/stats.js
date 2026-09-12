const books = [
  { title: "El Quijote", pages: 863, year: 1605, read: true },
  { title: "Clean Code", pages: 464, year: 2008, read: false },
  { title: "Fahrenheit 451", pages: 256, year: 1953, read: true },
  { title: "El Hobbit", pages: 310, year: 1937, read: false },
];

function p_vs_l() {
    const read = books.filter((book) => book.read);
    const notRead = books.filter((book) => book.read);
    console.log("Leídos: ", read.length);
    console.log("No leídos: ", notRead.length);
}

function frmt(){
    const arr = books.map((book) => book.title + " (" + book.year + ")  — " + book.pages + " págs")
    arr.forEach((element) => console.log(element))
}

function totals(){
    let initialValue = 0;
    let sumWithInitial = books.reduce((accumulator, book) => accumulator + book.pages, initialValue);
    return sumWithInitial;
}

function immutability(){
    // get rekt
    const copy = JSON.parse(JSON.stringify(books));
    // modify
    // tbf it did say to modify this book but NOT how to!!!
    copy[1].read = true;
    console.log("Original:");
    books.forEach((book) => console.log(book));
    // newl
    console.log();
    console.log("Copy:");
    copy.forEach((book) => console.log(book));
}

function makeReadingTracker(initial=0) {
    let value = initial;
    return {
        next: () => ++value,
        reset: () => (value = initial)
    };
}

p_vs_l();
// newl
console.log();
frmt();
// newl
console.log();
console.log(totals());
// newl
console.log();
immutability();
