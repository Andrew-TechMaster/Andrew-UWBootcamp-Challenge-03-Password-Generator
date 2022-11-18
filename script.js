// Assignment Code
var generateBtn = document.querySelector("#generate");

// This page says
// Enter disired password length (between 8~128 characters): 
// Include lowercase letters?
// Include uppercase letters?
// Inculde numeric values?
// Include specail characters?

// This function will generate password
function generatePassword() {
  // Declare arrarys for the password value: lowerCase, upperCase, num, spcial, empty(for the result)

  // Prompt the message and store the value for the length of the generatred password

  // Use window confirm() to check a series of criteria

  // Condition check and actual implementation: condition check, random output, etc.

  // Finally, return the result
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  // call back writePassword method


