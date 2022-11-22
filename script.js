// {========= Select Btn ==========} 
var generateBtn = document.querySelector("#generate");

// {========= This function will generate the password ==========} 
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

  // empty array for the generated password and placeholder for the selected requirements
  var validArrayObj = [];
  const result = [];

  // <---------- Prompt the message and store the value for the length of the generatred password ----------> 
  // handle invalid input & edge-case 
  while (true) {
    // use var keyword to declare, or it cannot be accessed outside the while loop
    var userInput = prompt("Enter disired password length (between 8~128 characters): ");
    var lengthOfPassword = parseInt(userInput);

    // If user pressed Cancel, immediately end function
    if (userInput === null) {
      return;
    }

    if (isNaN(lengthOfPassword)) {
      alert("🔢 Invalid input, the input should be numbers between 8~128 🔢");
    } else if (lengthOfPassword <= 8 || lengthOfPassword >= 128) {
      if (lengthOfPassword <= 8) {
        alert("🤏 Your password is too short 🤏");
      } else {
        alert("🐷 Your password is too long 🐷");
      }
    } else {
      break;  // if the input is valid, jump out of the while loop
    }
  };

  // <---------- Use window confirm() to check a series of criteria ---------->   
  // handle edge-case while user select nothing 
  while (true) {
    var includeUpperCase = confirm("🔠 Include uppercase letters? 🔠");
    var includeLowerCase = confirm("🔡 Include lowercase letters? 🔡");
    var includeNumeric = confirm("🔢 Inculde numeric values? 🔢");
    var includeSpecial = confirm("⁉️ Include specail characters? ⁉️");

    if (!includeUpperCase && !includeLowerCase && !includeNumeric && !includeSpecial) {
      alert("🍎 Please include at least one of the options. Choose again: 🍎");
    } else {
      break;
    }
  };


  // <---------- Condition check and actual implementation: condition check, random output, etc. ----------> 
  validArrayObj.push(includeUpperCase ? upperCaseChars : []);
  validArrayObj.push(includeLowerCase ? lowerCaseChars : []);
  validArrayObj.push(includeNumeric ? numArray : []);
  validArrayObj.push(includeSpecial ? specialChars : []);

  while (result.length < lengthOfPassword) {
    let selectedArrayIndex = randomSelect(validArrayObj.length);
    let selectedItemIndex = randomSelect(validArrayObj[selectedArrayIndex].length);
    let selectedValue = validArrayObj[selectedArrayIndex][selectedItemIndex];

    // check if the value is undefined or not, if it's undefine then we don't add it to the result
    if (selectedValue) {
      result.push(selectedValue);
    }
  };
  
  // <---------- Finally, return the result ----------> 
  return result.join('');  // convert an array to a string
}

// {========= Call this function to random choose =========} 
function randomSelect(itemLength) {
  return Math.floor(Math.random() * itemLength);
}

// {========= Write password to the #password input =========} 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // If users pressed cancel in the first step, not return "undefined" but the placeholder
  if (password === undefined) {
    return;
  }

  passwordText.value = password;
}

// {========= Add event listener to generate button =========} 
generateBtn.addEventListener("click", writePassword);  // call back writePassword method





// {========= Notes ==========} 
// This page says
// Enter disired password length (between 8~128 characters): 
// Include lowercase letters?
// Include uppercase letters?
// Inculde numeric values?
// Include specail characters?


// {========= Unused Code & Testing Code =========} 
// function generatePassword(){
// let includeUpperCase = confirm("Include uppercase letters?");
// let includeLowerCase = confirm("Include lowercase letters?");
// let includeNumeric = confirm("Inculde numeric values?");
// let includeSpecial = confirm("Include specail characters?");
//   console.log(upperCaseChars);
//   console.log(lowerCaseChars);
//   console.log(numArray);
//   console.log(specialChars);
//   console.log("---------------------------");
//   console.log(`${userInput}, ${includeUpperCase}, ${includeLowerCase}, ${includeNumeric}, ${includeSpecial}`);
//   console.log( `${validArrayObj} and the length is {${validArrayObj.length}}`);
//   console.log(validArrayObj);
//   console.log(validArrayObj[0]);
//   console.log("---------------------------");
//   var temp = result.join('');
//   console.log(temp)
// }
// generatePassword();  // for testing, later will delete

