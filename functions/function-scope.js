//global  - fahrToCels, result1, result2
// local In fucntion - convert, fahrdegrees

let fahrToCels = function (fahrDegrees) {
    let convertFahr = ((fahrDegrees - 32) * 5) / 9;

        if (convertFahr <= 0) {
            let isFreezing= true;
        }

    return convertFahr;
}

let resultFahrToCels = fahrToCels(32);
console.log(resultFahrToCels);
let resultFahrToCels2 = fahrToCels(68);
console.log(resultFahrToCels2);