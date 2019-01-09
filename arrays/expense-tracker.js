const account = {
    name: 'Emils',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        let expense = {
            description: description,
            amount: amount
        }
        return this.expenses.push(expense);
    },
    addIncome: function (description, amount) {
        let income = {
            description: description,
            amount: amount
        };
        return this.income.push(income);
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach(expense => {
            totalExpenses = totalExpenses + expense.amount;
        });

        let totalIncome = 0;
        this.income.forEach(income => {
          totalIncome = totalIncome + income.amount;
        });
        let balance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
    }
}

// add income array to account
// addIncome method = description, amount
// tweak getAccountSummary, expenses, inceom, balance

// Andrew Mead has a balance of 10$. $100 in income. $90 in expenses.


account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account);
console.log(account.getAccountSummary());