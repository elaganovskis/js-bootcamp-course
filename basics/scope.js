// Lexical scope (Static Scope)
// Global scope - inside of block
// Local scope - outside of block

let varOne = 'varOne';

if(true) {
    console.log('varOne');
    let varTwo = 'varTwo';

    if(true) {
        let varFour = 'varFour';
        console.log(varOne);
        console.log(varTwo);
    }
}

if(true) {
    let varThree = 'varThree';
}
