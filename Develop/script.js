// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
// prompt the user when they click on the generate button
  var userInput = window.prompt("How long would you like your password to be?")
// parseInt: parses a string argument and returns an integer 
  var passwordLength = parseInt(userInput)



// if the userInput is not a number. (isNaN function: checks if value is not a number)                                    
  if (isNaN(passwordLength)){
// alert the user that they did not pick a number
    window.alert("This is not a number")
// end the function and start over 
    return
  }
  // if passwordLength is less than 8 and more than 128 
if (passwordLength < 8 || passwordLength > 128){
  // alert the user that they did not pick a number 8 - 128
    window.alert("password length needs to be 8 - 128 characters")
  //end the function and start over 
    return
  }






}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
