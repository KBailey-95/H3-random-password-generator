// Assignment Code
var generateBtn = document.querySelector("#generate");//await

// Write password to the #password input
function writePassword() {
  var passLength;
  var isLowerCase = window.confirm("Would you like lower case values in your password?");
  var isUpperCase = window.confirm("Would you like upper case values in your password?");
  var isNumeric = window.confirm("Would you like numeric values in your password?");
  var isSpecChar = window.confirm("Would you like special characters in your password?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
