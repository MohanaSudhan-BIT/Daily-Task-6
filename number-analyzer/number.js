function table(num) {
  console.log("Multiplication table of " + num + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}

function sum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

function triangle(num) {
  console.log("Right-angled triangle (" + num + " rows):");
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "* ";
    }
    console.log(line);
  }
}

function square(num) {
  console.log("Square pattern (" + num + "x" + num + "):");
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let col = 1; col <= num; col++) {
      line += "* ";
    }
    console.log(line);
  }
}

function start() {
  let again = true;

  while (again) {
    const input = prompt("Enter a positive number:");
    const num = Number(input);

    if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
      alert("Invalid input! Please enter a positive whole number.");
    } else {
      let type;
      if (num % 2 === 0) {
        type = "Even";
      } else {
        type = "Odd";
      }

      table(num);

      const total = sum(num);
      console.log("Sum of 1 to " + num + " = " + total);

      if (num % 2 === 0) {
        square(num);
      } else {
        triangle(num);
      }

      alert("Number: " + num + "\nType: " + type + "\nSum (1 to " + num + "): " + total);
    }

    again = confirm("Do you want to run the program again?");
  }

  alert("Goodbye!");
}

start();
