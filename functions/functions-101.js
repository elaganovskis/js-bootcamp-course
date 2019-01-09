let greetUser  = function () {
    console.log('Hey!');
};

greetUser();
greetUser();


let square = function(num) {
    let result = num * num;
    return result;
};

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);


// Challenge

//convert fahrenheit to celsius



let fahrToCels = function(fahrDegrees) {
    let convertFahr = ((fahrDegrees - 32) * 5) / 9;
    return convertFahr;
}

let resultFahrToCels = fahrToCels(32);
console.log(resultFahrToCels);
let resultFahrToCels2 = fahrToCels(68);
console.log(resultFahrToCels2);

