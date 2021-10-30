let x = prompt("Input the Math mark");
let y = prompt("Input the Physical  mark");
let z = prompt("Input the Chemistry mark");

mathPoint = parseFloat(x);
physicalPoint = parseFloat(y);
chemistryPoint = parseFloat(z);

//Calculate the average mark, rounded to 1 decimal.

let averageMark = Number.parseFloat((mathPoint + physicalPoint + chemistryPoint) / 3).toFixed(1);

console.log(averageMark);

// Alert message: “Your average mark is xx. Your rank is: X”

let alertMessage = "Your average mark is " + averageMark
if (averageMark >= 8.0)
    alertMessage += "Your rank is: A";
else if (averageMark >= 6.5)
    alertMessage += "Your rank is: B";
else if (averageMark >= 5.0)
    alertMessage += "Your rank is: C";
else alertMessage += "Your rank is: D";

alert(alertMessage);