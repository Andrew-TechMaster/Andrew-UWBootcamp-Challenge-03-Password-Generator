// {========= Assignment Code ==========} 
var generateBtn = document.querySelector("#generate");

// {========= Notes ==========} 
// This page says
// Enter disired password length (between 8~128 characters): 
// Include lowercase letters?
// Include uppercase letters?
// Inculde numeric values?
// Include specail characters?

// {========= This function will generate password ==========} 
function generatePassword() {
  // <---------- Declare arrarys for the password value: lowerCase, upperCase, num, spcial, empty(for the result) ----------> 
  // upper case array
  const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // lower case array
  const lowerCaseChars = [];
  upperCaseChars.forEach(char => { lowerCaseChars.push(char.toLowerCase()) });

  // numeric value from 0~9
  const numArray = [];
  for (let index = 0; index <= 9; index++) {
    numArray.push(index);
  }

  // special characters
  const specialChars = ["!", "@", "#", "$", "%", "&", "*", "?"];

  // empty array for the generated password
  const result = [];

  // <---------- Prompt the message and store the value for the length of the generatred password ----------> 
  let userInput = prompt("Enter disired password length (between 8~128 characters): ");

  // <---------- Use window confirm() to check a series of criteria ----------> 
  let includeUpperCase = confirm("Include uppercase letters?");
  let includeLowerCase = confirm("Include lowercase letters?");
  let includeNumeric = confirm("Inculde numeric values?");
  let includeSpecial = confirm("Include specail characters?");

  // <---------- Condition check and actual implementation: condition check, random output, etc. ----------> 


  // <---------- Finally, return the result ----------> 
  console.log(upperCaseChars);
  console.log(lowerCaseChars);
  console.log(numArray);
  console.log(specialChars);
  console.log(`${userInput}, ${includeUpperCase}, ${includeLowerCase}, ${includeNumeric}, ${includeSpecial}`);
}


// {========= Write password to the #password input =========} 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// {========= Add event listener to generate button =========} 
generateBtn.addEventListener("click", writePassword);  // call back writePassword method

generatePassword();  // for testing, later will delete

