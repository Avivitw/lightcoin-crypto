class Account {

  constructor(username) {
    this.username = username;
    //we want the account balance will start at 0 becuase it make sense
    this.transactions = [];
    // this.balance = 0;
  }


  get balance() {
    // Calculate the balance using the transaction objects.
    return this.transactions.reduce((acc, transac)=> {
      return acc + transac.value;
    }, 0);

  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;

  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);

    // this.account.balance += this.value;
  }


}

class Deposite extends Transaction {

  get value() {
    return this.amount;
  }

}


class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}








// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

let myAccount = new Account(`Fire Ant`);
// console.log(myAccount);

let t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

let t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

let t3 = new Deposite(120.00, myAccount);
t3.commit();
// console.log(`Transaction 3:`, t3);

console.log(myAccount.balance);
console.log(myAccount);

