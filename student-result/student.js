function total(m1, m2, m3) {
  return m1 + m2 + m3;
}

function average(totalMarks) {
  return totalMarks / 3;
}

function grade(avg) {
  if (avg >= 90) {
    return "A";
  } else if (avg >= 75) {
    return "B";
  } else if (avg >= 50) {
    return "C";
  } else {
    return "F";
  }
}

function start() {
  let again = true;

  while (again) {
    const name = prompt("Enter student name:");

    const m1 = Number(prompt("Enter marks for Subject 1 (0-100):"));
    const m2 = Number(prompt("Enter marks for Subject 2 (0-100):"));
    const m3 = Number(prompt("Enter marks for Subject 3 (0-100):"));

    if (isNaN(m1) || isNaN(m2) || isNaN(m3) ||
        m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100) {
      alert("Error! Marks must be numbers between 0 and 100.");
    } else {
      const totalMarks = total(m1, m2, m3);
      const avg = average(totalMarks);
      const g = grade(avg);

      alert("Name: " + name + "\nTotal: " + totalMarks + "\nAverage: " + avg.toFixed(2) + "\nGrade: " + g);
      console.log("Name: " + name + ", Total: " + totalMarks + ", Average: " + avg.toFixed(2) + ", Grade: " + g);
    }

    again = confirm("Do you want to calculate another student's result?");
  }

  alert("Goodbye!");
}

start();
