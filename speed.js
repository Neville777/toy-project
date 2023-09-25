// Write a function calDemeritPoints that takes speed as input and returns the demerit points.
function calDemeritPoints (speed) {
    const speedLimit = 70;
    let demeritPoint = 0;

// If speed < 70, the function should return "OK".
    if (speed < speedLimit) {
        return ("OK")
    } 
    else {

// If speed >= 70 demeritPoints =(speed - 70) / 5.
        demeritPoint = Math.floor(speed - speedLimit) / 5;

// If demeritPoints > 12, the function should return "License Suspended".
    if (demeritPoint > 12) {
            return ("License Suspended")
    }

// If demeritPoints <= 12, the function should return demeritPoints.

        else {
            return (`Points : ${demeritPoint} `);
     }
    }
}
let speed = 30;
console.log(calDemeritPoints(speed));