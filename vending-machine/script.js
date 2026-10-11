const items = [
  { number: 1, name: "Chips", price: 20 },
  { number: 2, name: "Chocolate", price: 30 },
  { number: 3, name: "Soda", price: 25 },
  { number: 4, name: "Cookies", price: 15 },
  { number: 5, name: "Juice", price: 40 }
];

function menu() {
  console.log("--- Vending Machine Menu ---");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].number + ". " + items[i].name + " - Rs." + items[i].price);
  }
}

function getChange(price, amount) {
  return amount - price;
}

function checkItem(itemNumber) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].number === itemNumber) {
      return items[i];
    }
  }
  return null;
}

function printPattern(n) {
  console.log("Number pattern for item " + n + ":");
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += col + " ";
    }
    console.log(line);
  }
}

function count() {
  for (let i = 3; i >= 1; i--) {
    console.log("Dispensing in " + i + "...");
  }
}

function start() {
  let again = true;

  while (again) {
    menu();

    const itemInput = prompt("Enter item number (1-5):\n1.Chips-20 2.Chocolate-30 3.Soda-25 4.Cookies-15 5.Juice-40");
    const itemNumber = Number(itemInput);

    const selected = checkItem(itemNumber);
    if (selected === null) {
      alert("Invalid item number! Please select 1 to 5.");
    } else {
      const moneyInput = prompt("You selected " + selected.name + " (Rs." + selected.price + "). Enter your money:");
      const money = Number(moneyInput);

      if (isNaN(money) || money < 0) {
        alert("Invalid amount! Please enter a number.");
      } else if (money < selected.price) {
        alert("Insufficient balance! " + selected.name + " costs Rs." + selected.price + ", you gave Rs." + money + ".");
      } else {
        const change = getChange(selected.price, money);
        if (change === 0) {
          alert("You bought " + selected.name + ". Exact payment received. No change.");
        } else {
          alert("You bought " + selected.name + ". Change returned: Rs." + change + ".");
        }
        console.log("Purchased: " + selected.name + ", Change: Rs." + change);

        count();
        alert(selected.name + " is ready! Enjoy!");
        printPattern(selected.number);
      }
    }

    again = confirm("Do you want to make another purchase?");
    if (!again) {
      alert("Thank you! Goodbye!");
    }
  }
}

start();
