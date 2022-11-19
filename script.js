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

  // empty array for the temp array & generated password
  var validArrayObj = [];
  const result = [];

  // <---------- Prompt the message and store the value for the length of the generatred password ----------> 
  let userInput = prompt("Enter disired password length (between 8~128 characters): ");
  let lengthOfPassword = parseInt(userInput);

  // <---------- Use window confirm() to check a series of criteria ----------> 
  let includeUpperCase = confirm("Include uppercase letters?");
  let includeLowerCase = confirm("Include lowercase letters?");
  let includeNumeric = confirm("Inculde numeric values?");
  let includeSpecial = confirm("Include specail characters?");

  // <---------- Condition check and actual implementation: condition check, random output, etc. ----------> 
  validArrayObj.push(includeUpperCase ? upperCaseChars : []);
  validArrayObj.push(includeLowerCase ? lowerCaseChars : []);
  validArrayObj.push(includeNumeric ? numArray : []);
  validArrayObj.push(includeSpecial ? specialChars : []);

  while (result.length < lengthOfPassword) {
    let selectedArrayIndex = randomSelect(validArrayObj.length);
    let selectedItemIndex = randomSelect(validArrayObj[selectedArrayIndex].length);
    let selectedValue = validArrayObj[selectedArrayIndex][selectedItemIndex];
    
    // check if the value is undefined or not, if it's undefined we don't add it to the result
    if (selectedValue) {
      result.push(selectedValue);
    } 
  };

  // <---------- Finally, return the result ----------> 
  // console.log(upperCaseChars);
  // console.log(lowerCaseChars);
  // console.log(numArray);
  // console.log(specialChars);
  // console.log("---------------------------");
  // console.log(`${userInput}, ${includeUpperCase}, ${includeLowerCase}, ${includeNumeric}, ${includeSpecial}`);
  // console.log( `${validArrayObj} and the length is {${validArrayObj.length}}`);
  // console.log(validArrayObj);
  // console.log(validArrayObj[0]);
  // console.log("---------------------------");
  // var temp = result.join('');
  // console.log(temp)

  return result.join('');  // conver an array to a string
}

function randomSelect (itemLength) {
  return Math.floor(Math.random() * itemLength);
}

// {========= Write password to the #password input =========} 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// {========= Add event listener to generate button =========} 
generateBtn.addEventListener("click", writePassword);  // call back writePassword method

// generatePassword();  // for testing, later will delete

