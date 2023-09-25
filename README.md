# toy-project

Grade Classification Code

This is a code written in JavaScript that takes a numerical grade as input and returns the corresponding letter grade based on a predefined grading scale. The grading scale ranges from 0 to 100, and anything ouside it as "invalid grade".

Usage 

javascript
Copy code
console.log(result(75)); // Outputs "B"
Function Explanation

=> It takes a single argument, grade, which should be a number between 0 and 100.

=> It uses a series of conditional statements (if-else if) to determine the corresponding letter grade.

If grade is between 0 and 39 (inclusive), it returns "E" .
If grade is between 40 and 49 (inclusive), it returns "D."
If grade is between 50 and 59 (inclusive), it returns "C."
If grade is between 60 and 79 (inclusive), it returns "B."
If grade is between 80 and 100 (inclusive), it returns "A".
If grade is outside the 0-100 range, it returns "Invalid grade."

Salary Calculation Code

This is a JavaScript script code that calculates various salary components, including Payee (tax), NHIF deductions, NSSF deductions, and net salary, based on a given basic salary and benefits.

How it Works

The script consists ofthe following functions:

=> calculatePayee(basicSalary): This function calculates Payee (tax) based on the provided basic salary. It uses Kenya Revenue Authority (KRA) tax brackets to determine the tax rate.

=> calculateNHIFDeductions(basicSalary): This function calculates NHIF (National Hospital Insurance Fund) deductions based on the provided basic salary. It takes predefined NHIF contribution rates for different income ranges.

=> calculateNSSF(basicSalary, tier): This function calculates NSSF (National Social Security Fund) deductions based on the provided basic salary and NSSF tier. It takes into account the contribution rates for Tier I and Tier II.

=> calculateNetSalary(basicSalary, benefits): This function is responsble for calculating the net salary by considering the provided basic salary, additional benefits, and deducting Payee, NHIF, and NSSF contributions. It returns an object containing the gross salary, Payee, NHIF deductions, NSSF deductions, and net salary.

=> Main Program: The script includes an example of how to use these functions. It calculates salary details for a given basic salary and benefits, displays them using console.log, and stores the results in the salaryDetails object.

Example:

javascript
Copy code
const basicSalary = 6000;
const benefits = 5000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Salary Details:");
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Payee (Tax): ${salaryDetails.payee}`);
console.log(`NHIF Deductions: ${salaryDetails.nhifDeductions}`);
console.log(`NSSF Deductions: ${salaryDetails.nssfDeductions}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);


Demerit Points Calculation Code

This code defines a JavaScript code that calculates and returns demerit points based on a given speed compared to a speed limit. The function considers two scenarios: when the speed is below the limit (resulting in "OK") and when it's above the limit (calculating demerit points).

Usage
You can use this code by calling the calDemeritPoints function and passing a speed value as its argument. For example:

javascript
Copy code
let speed = 80;
console.log(calDemeritPoints(speed)); // Outputs "Points: 2"

Function Explanation

=> It takes a single argument, speed, which represents the driver's current speed.

=> It defines a constant speedLimit with a value of 70, representing the speed limit.

=> If the speed is less than the speedLimit (70), the function returns "OK," .

=> If the speed is greater than or equal to the speedLimit, the function calculates demerit points using the formula (speed - speedLimit) / 5 and stores the result in the demeritPoint variable.

=> If demeritPoint exceeds 12, the function returns "License Suspended," indicating that the driver's license should be suspended due to overspeeding.

=> If demeritPoint is 12 or less, the function returns the number of demerit points in the format "Points: X," where X is the actual number of demerit points.

Example

javascript
Copy code
let speed = 30;
console.log(calDemeritPoints(speed));
The input speed is 30, which is below the speed limit (70). Therefore, the function will return "OK."
