// Assignment Code
var generateBtn = document.querySelector("#generate");

// a function to get a random intiger
// this is being used to pick a random number, letter, or symbol from the user picked arrays
function randomInt(min, max){
if (!max){
  max = min
  min = 0
  }
  var rand =  Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}


// gives you a random position in the list
function getRandomItem(list){
  return list[randomInt(list.length)]
}

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

// If any of these are true, we want to include the actutal list below (numberList, symbolList, etc.)
var includeNumbers = window.confirm("Do you want to include numbers?")
var includeSymbols = window.confirm("Do you want to include symbols?")
var includeLowercase = window.confirm("Do you want to include lowercase letters?")
var includeUppercase = window.confirm("Do you want to include uppercase letters?")

// these list will connect back to the window.confirm question above 
var numberList = ["1","2","3","4","5","6","7","8","9","0" ];
var symbolList = ['!','@','#','$','%','^','&','*','(',')','_','+','=','?','>','<'];
var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseList = [];

// empty array waiting for items to fill its "shopping cart"
// its like going to the grocery store and adding items to your cart. 
var optionCart = [];

// iterating over the lowecase list 
// start "i" at zero [var i = 0] (which would be A)
// continue through the entire array until "i" is equal to the array length (ending with z)
// i++ is equal to saying i = i + 1
for (var i = 0; i < lowercaseList.length; i++){
// setting the same position of the lowercase array to the uppercase array
// .toUpperCase with capitalize the letters
  uppercaseList[i] = lowercaseList[i].toUpperCase();
}


// if includeNumbers is equal to true or "yes"
if (includeNumbers === true) {
// .push is saying add numberList to optionCart
  optionCart.push(numberList)
  }

if (includeSymbols === true) {
  optionCart.push(symbolList)
  }

if ( includeLowercase === true) {
  optionCart.push(lowercaseList)
  }

if ( includeUppercase === true) {
  optionCart.push(uppercaseList)
  } 

  // if the user said no to everthing, default to lowercase letters
if (optionCart.length === 0){
    optionCart.push(lowercaseList)
  }
 
 var generatePassword = ""

 for (var i = 0; i < passwordLength; i++){
  // we need a random value from an array
  var randomList = getRandomItem(optionCart)
  var randomChar = getRandomItem(randomList)
  generatePassword += randomChar
 }
 // the function is now over and we want to return that result to where is was called
return generatePassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
