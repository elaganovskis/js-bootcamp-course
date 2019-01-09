let myAccount = {
    name: 'Emils Laganovskis',
    expenses: 0,
    income: 0
};

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
};

//addIncome

let addIncome = function(account, amount) {
    account.income = account.income + amount;
};

//resetAccount - reset expenses, income

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

//getAccountSummary Account for Emils has $900. $1000 in income. $100 in expeneses.

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${myAccount.name} has $${balance}. $${myAccount.income} in income. $${myAccount.expenses} in expenses.`;
}


addIncome(myAccount, 1000);
addExpense(myAccount, 50);
addExpense(myAccount, 50);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
getAccountSummary(myAccount);
console.log(getAccountSummary(myAccount));