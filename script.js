// Assignment Code
var generateBtn = document.querySelector("#generate");//await

// Write password to the #password input
function writePassword() {
  //instantiate parameter variables
  var passLength = window.prompt("How long would you like your password to be? Acceptable passwords are between 8 and 128 characters long.");
  console.log(passLength);

  //check for appropriate password length
  if (passLength < 8 || passLength > 128) {
    passLength = prompt("The length of your password must be between 8 and 128 chracters. How long would you like your password to be?");
  }

  var isLowerCase = window.confirm("Would you like lower case values in your password?");
  var isUpperCase = window.confirm("Would you like upper case values in your password?");
  var isNumeric = window.confirm("Would you like numeric values in your password?");
  var isSpecChar = window.confirm("Would you like special characters in your password?");

  //check to make sure at least one of the character types is used
  if (!(isLowerCase || isUpperCase || isNumeric || isSpecChar)){

    window.alert("Please select at least one character type so that a password can be generated.")
    writePassword();
  }
  generatePassword(isLowerCase, isUpperCase, isNumeric, isSpecChar, passLength);
}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create function to generate password
function generatePassword(isLowerCase, isUpperCase, isNumeric, isSpecChar, passLength){
  var createdPassword = "";
  console.log(createdPassword);

 //create string to store allowed characters based on value of booleans created with window.confirm
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

  //loop through to create a value for each character in passLength
  for (let i = 0; i < passLength; i++) {
    createdPassword += allowed[Math.floor(Math.random() * allowed.length)];
  }
 
  //select textarea and return created password to it
  var passwordText = document.querySelector("#password");

  passwordText.value = createdPassword;


};
