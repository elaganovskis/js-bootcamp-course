let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 4);
console.log(result);


//  Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score ${score}`;
}


let scoreText = getScoreText(undefined, 90);
console.log(scoreText);


// Challenge area
// total, tipPercent 0.2



let getTip = function(total, tipPercent = 0.2) {
    let tipSum = total * tipPercent;
    let percent = tipPercent * 100;
    return `A ${percent}% tip on $${total} would be $${tipSum}!`;
};

let getTipSum = getTip(100);
console.log(getTipSum);



