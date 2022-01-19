// Assignment Code
var generateBtn = document.querySelector("#generate");//await

// Write password to the #password input
function writePassword() {
  //instantiate parameter variables
  var passLength = window.prompt("How long would you like your password to be? Acceptable passwords are between 8 and 128 characters long.");
  console.log(passLength);

  //check for appropriate password length
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("The length of your password must be between 8 and 128 chracters. How long would you like your password to be?");
  }

  var isLowerCase = window.confirm("Would you like lower case values in your password?");
  var isUpperCase = window.confirm("Would you like upper case values in your password?");
  var isNumeric = window.confirm("Would you like numeric values in your password?");
  var isSpecChar = window.confirm("Would you like special characters in your password?");

  //check to make sure at least one of the character types is used
  while (!(isLowerCase || isUpperCase || isNumeric || isSpecChar)){

    window.alert("Please select at least one character type so that a password can be generated.")
    writePassword();
    
    generatePassword();

  }
}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create function to generate password
function generatePassword(){
  var createdPassword = "pls";
  console.log(createdPassword);

 //create array to store allowed characters based on value of booleans created with window.confirm
 var allowed = "";
  if (isLowerCase) {
    allowed += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (isUpperCase) {
    allowed += "QWERTYUIOPASDFGHJKLZXCVBN";
  }
  if (isNumeric) {
    allowed += "1234567890";
  }
  if (isSpecChar) {
    allowed += "!@#$%^&*(){}[]=<>/,.";
  }
 
  console.log(allowed);

  var passwordText = document.querySelector("#password");

  passwordText.value = createdPassword;


};

  
//   //create logic for function that takes confirm results and generates password
//   const passRandomizer = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
//   };

//   function generatePassword(lower, upper, number, symbol, length) {
//     let generatedPassword = '';
//     const typesCount = lower + upper + number + symbol;
//     const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  
//     // create a loop
//     for (var i = 0; i < length; i += typesCount) {
//       typesArr.forEach(type => {
//         const funcName = Object.keys(type)[0];
//         generatedPassword += randomFunc[funcName]();
//       });
//     }

//     var displayedPassword = generatedPassword.slice(0, length);

//     return displayedPassword;
//   }

//   // Generator functions
// function getRandomLower() {
//   return rando("qwertyuiopasdfghjklzxcvbnm")
// }

// function getRandomUpper() {
//   return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
// }

// function getRandomNumber() {
//   return rando(9);
// }

// function getRandomSymbol() {
//   return rando('!@#$%^&*(){}[]=<>/,.');
// }


//   // //Determine what happens when each condition is true
//   // if (isLowerCase = true) {
//   //   password.toLowerCase()
//   // }
//   // if (isUpperCase.toUpperCase)

//   //create variable that communicates where password will be stored
  

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
