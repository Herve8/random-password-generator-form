// when clicked the "Generate Password" button in the html document triigers an event which will prompt the user
//about the password selection criteria
document.querySelector("#generate").addEventListener("click", writePassword);

//An array of password options to choose from between 8 to 128 characters
var passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variable declaration
var confirmPasswordLength="";
var confirmNumbersInPassword;
var confirmCharacters;
var optionUpperCase;
var optionLowerCase;

//document.getElementById("#generate").onclick = promptNoOfChars;

 //WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria


//when the user clicks on the Generate Password button on the form
 function generatePassword(){
  
  //initialise password length to 0
  confirmPasswordLength = 0;
  //WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
  var confirmPasswordLength = (prompt("How many characters would you like to have in your password?"));
  
  //User should enter a number which between 8 and 128
  while(confirmPasswordLength < 8 || confirmPasswordLength > 128)
  {
    //if the user has entered  a number which is <8 or >128 prompt user to try again
    alert("Password length must be between 8 and 128 characters. Please try again.");
    confirmPasswordLength = (prompt("How many characters would you like in your password?")); 
   }

    //Record the result into console
   console.log(confirmPasswordLength);
 
 //If user has entered a number <8 and > 128 prompt again
//Prompt user where to include numbers in the password
var confirmNumbersInPassword = confirm("Would you like to include numbers in your password? OK to select/Cancel to omit");

 //Prompt for special character types to include in the password
var confirmCharacters = confirm("Would you like to add special characters to your password? OK to select/Cancel to omit");

//Prompt user whether to choose uppercase
var optionUpperCase = confirm("Would you like to include upper case letters in your password? OK to select/Cancel to omit");

//Prompt user whether to choose lowercase
var optionLowerCase = confirm("Would you like to include lower case letters in your password? OK to select/Cancel to omit");

 //Based on the users's selection option input should be validated and at least one character type should be selected

if(confirmNumbersInPassword === false || confirmCharacters === false ||
  optionUpperCase === false || optionLowerCase === false){
    alert("Looks like there's on option that you've missed out! Please choose one password option");

    //Prompt user for password selection again
    confirmNumbersInPassword = confirm("Would you like to include numbers in your password?");
    confirmCharacters = confirm("Would you like to add special characters to your password? OK to select/Cancel to omit");
    optionUpperCase = confirm("Would you like to include upper case letters in your password? OK to select/Cancel to omit");
    optionLowerCase = confirm("Would you like to include lower case letters in your password? OK to select/Cancel to omit");
  }
  /*console.log(confirmNumbersInPassword);
  console.log(confirmCharacters);
  console.log(optionUpperCase);
  console.log(optionLowerCase);*/

  //Password selection criteria will now be based on users' output
  //The concat() method used will merge the users' password selection criteria together to output on password

  //Assign password characters to an empty array of charsInPassword[]
  var charsInPassword = [];

  //The out put will be based if the user chooses to include Numbers in the password
  if(confirmNumbersInPassword){
    charsInPassword = charsInPassword.concat(passwordNumbers);
  }

  if(confirmCharacters){
    charsInPassword = charsInPassword.concat(specialCharacters);
  }
  if(optionUpperCase){
    charsInPassword = charsInPassword.concat(upperCase);
  }
  if(optionLowerCase){
    charsInPassword = charsInPassword.concat(lowerCase);
  }

  //Create a variable called password collection which will collect all the passwords criteria selected
  //and convert them into one password
  //First declare variable passwordCollection as an empty string
  var passwordRandomGenerator = "";

  //Perform a loop to collect all the users' password selection criteria
  for(var i = 0; i < confirmPasswordLength; i++){
    passwordRandomGenerator = passwordRandomGenerator + charsInPassword[Math.floor(Math.random() * charsInPassword.length)];
      console.log(passwordRandomGenerator);
  }
  return passwordRandomGenerator;
}

     // Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);




//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria



//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


