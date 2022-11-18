// Assignment Code
var generateBtn = document.querySelector("#generate");

// This page says
// Enter disired password length (between 8~128 characters): fa
// Include lowercase letters?
// Include uppercase letters?
// Inculde numeric values?
// Include specail characters?
function generatePassword() {
  alert("it works!");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


