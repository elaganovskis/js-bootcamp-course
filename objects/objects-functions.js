let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};


let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

let summary = function(book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = summary(myBook);
let otherBookSummary = summary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.summary, otherBookSummary.pageCountSummary)

// Challenge
// Create function - take fahrenheit in - return object with all three
let farenheit = 68;
let celsius = ((farenheit - 32) * 5) / 9;
let kelvin = ((farenheit + 459.67) * 5) / 9;

let degrees = function (farenheit) {
  return {
    fahrenheit: `${farenheit}`,
    celsius: `${((farenheit - 32) * 5) / 9}`,
    kelvin: (farenheit + 459.67) * 5 / 9
  }
};

let degrFn = degrees(farenheit);
console.log(degrFn);


