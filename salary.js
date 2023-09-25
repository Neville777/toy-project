// Function to calculate tax (payee) based on basic salary
function calculatePayee(basicSalary) {
  // KRA payee 
  if (basicSalary <= 24000) {
      return basicSalary * 0.10;
  }
  else if (basicSalary >= 24001 && basicSalary <= 32333) {
      return basicSalary * 0.25;
  }
  else if (basicSalary >= 32334 && basicSalary <= 500000) {
      return basicSalary * 0.30;
  }
  else if (basicSalary >= 500001 && basicSalary <= 800000) {
      return basicSalary * 0.325;
  }
  else if (basicSalary >= 800000){
      return basicSalary * 0.35;
  }

  // Default case if none of the above conditions are met
  return 0;
}

// Function to calculate NHIF deductions based on basic salary
function calculateNHIFDeductions(basicSalary) {
  
  if (basicSalary <= 5999) {
    return 150;
  }
  else if (basicSalary >=6000 && basicSalary <= 7999) {
    return 300;
  }
  if (basicSalary >= 8000 && basicSalary <= 11999) {
    return 400;
  }
  else if (basicSalary >= 12000 && basicSalary <= 14999) {
    return 500;
  }
  else if (basicSalary >= 15000 && basicSalary <= 19999) {
    return 600;
  }
  else if (basicSalary >= 20000 && basicSalary <= 24999) {
    return 750;
  }
 else  if (basicSalary >= 25000 && basicSalary <= 29999) {
    return 850;
  }
  else if (basicSalary >= 30000 && basicSalary <= 34999) {
    return 900;
  }
  else if (basicSalary >= 35000 && basicSalary <= 39999){
    return 950;
  }
 else if (basicSalary >= 40000 && basicSalary <= 44999){
    return 1000;
  }
  else if (basicSalary >= 45000 && basicSalary <= 49999){
    return 1100;
  }
  else if (basicSalary >= 50000 && basicSalary <= 59999){
    return 1200;
  }
  else if (basicSalary >= 60000 && basicSalary <= 69999){
    return 1300;
  }
  else if (basicSalary >= 70000 && basicSalary <= 79999){
    return 1400;
  }
  else if (basicSalary >= 80000 && basicSalary <= 89999){
    return 1500;
  }
  else if (basicSalary >= 90000 && basicSalary <= 99999){
    return 1600;
  }
  else if (basicSalary >= 100000 ) {
    return 1700;
  }
  return 0;
}
// Function to calculate NSSF deductions based on basic salary 
function calculateNSSF(basicSalary, tier) {
  // Define NSSF contribution rates for Tier I and Tier II
  const tierIRate = 0.06; // 6% for Tier I
  const tierIILowerLimit = 6001;
  const tierIILimit = 18000;
  const tierIIRate = 0.06; // 6% for Tier II

  // Determine which tier the basic salary falls into
  if (tier === "I") {
    // Check if basicSalary is within the Tier I limit
    if (basicSalary <= 6000) {
      return basicSalary * tierIRate;
    } else {
      // If basicSalary exceeds the Tier I limit, calculate contributions for the entire Tier I range
      return 6000 * tierIRate;
    }
  } else if (tier === "II") {
    // Check if basicSalary is within the Tier II limit
    if (basicSalary >= tierIILowerLimit || basicSalary > tierIILimit) {
      return (basicSalary - tierIILowerLimit ) * tierIIRate;
    } else if (basicSalary > tierIILimit) {
      // If basicSalary exceeds the Tier II limit, calculate contributions up to the limit
      return (tierIILimit - tierIILowerLimit) * tierIIRate;
    }
  }
  return 500; 
}


// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  const payee = calculatePayee(basicSalary);
  const nhifDeductions = calculateNHIFDeductions(basicSalary);
  const nssfDeductions = calculateNSSF(basicSalary);
  const grossSalary = basicSalary + benefits;
  const deductions = payee + nhifDeductions + nssfDeductions;
  const netSalary = grossSalary - deductions;

  return {
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary,
  };
}

// Running the main program
const basicSalary = 6000;
const benefits = 5000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Calling all the above parameters
console.log("Salary Details:");
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Payee (Tax): ${salaryDetails.payee}`);
console.log(`NHIF Deductions: ${salaryDetails.nhifDeductions}`);
console.log(`NSSF Deductions: ${salaryDetails.nssfDeductions}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
