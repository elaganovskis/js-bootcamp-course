let password = '123abcbr@#$';

let isValidPassword = function(password) {
    let notAllowed = password.includes('password');
    return password.length >= 9 && !notAllowed
}

console.log(isValidPassword(password));
console.log(isValidPassword('123absbradapassword'));
console.log(isValidPassword('broth'));



//length is more than 8 characters,
//password should not contain strings - password