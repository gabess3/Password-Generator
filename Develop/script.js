var generateBtn = document.querySelector("#generatePassword");

// Arrays for compiling users selected criteria into a final array. 

var upperCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","#","$","%","^","&","*","-","_","+",",",".","\\","'","(",")","/",":",";","<","=",">","?","[","]","`","{","|","}","~"];

// Final array used to generate the password.

var finalArray = [];

// Variables to set to true if user selects it as a critera during their prompts. 

var upperConfirm = false;
var lowerConfirm = false;
var numericConfirm = false;
var specialConfirm = false;
var passwordLength = 0; // Set to arbitrary length - this will change based on user input.


//---------------------------------------------------------------------------------------//


function generatePassword() {

  function passwordCriteria() {

  // Prompts user to input a set length of password and ensures proper datatype response. 

    var length = prompt("Please enter a password length between 8 and 128 characters: ");
    length = parseInt(length);
    if (length < 8 || length > 128 || isNaN(length)) {
      alert("Please enter a valid response.");
      return false;
    }
    else 
      passwordLength = length;
      alert("Your password will be " + passwordLength + " characters long.");

  // Alerts user to select at least one of the password criteria.    

    alert("Please select at least one of the following password criteria.");  

  // Prompts user to select various password criteria. 

    var upper = confirm("Would you like to include uppercase characters? Click 'Okay' for yes, and 'Cancel' for no.");
    if (upper) {
      alert("Your password will include uppercase characters.");
      upperConfirm = true;
    } else if (!upper){ 
      alert("Your password will not include uppercase characters.");
    }

    var lower = confirm("Would you like to include lowercase characters? Click 'Okay' for yes, and 'Cancel' for no.");
    if (lower) {
      alert("Your password will include lowercase characters.");
      lowerConfirm = true;
    } else if (!lower){ 
      alert("Your password will not include lowercase characters.");
    }

    var numeric = confirm("Would you like to include numeric characters? Click 'Okay' for yes, and 'Cancel' for no.");
    if (numeric) {
      alert("Your password will include numeric characters.");
      numericConfirm = true;
    } else if (!numeric){ 
      alert("Your password will not include numeric characters.");
    }

    var special = confirm("Would you like to include special characters? Click 'Okay' for yes, and 'Cancel' for no.");
    if (special) {
      alert("Your password will include special characters.");
      specialConfirm = true;
    } else if (!special){ 
      alert("Your password will not include special characters.");
    }

  // Resets the function if user did not select any criteria.

    if (!upper && !lower && !numeric && !special) {
      alert("You must select at least one password criteria. Please try again!")
      return passwordCriteria();
    }
  }

  passwordCriteria();

// Concatenates the final array used for generation based on users' selected criteria from prompts.  

  if (upperConfirm) {
    finalArray = finalArray.concat(upperCharacters);
  }
  if (lowerConfirm) {
    finalArray = finalArray.concat(lowerCharacters);
  }
  if (numericConfirm) {
    finalArray = finalArray.concat(numberCharacters);
  }
  if (specialConfirm) {
    finalArray = finalArray.concat(specialCharacters);
  }  

  // Generates random password based on the content of the final array compiled.  

  var generatedResult = ' ';

  for (i=0; i<passwordLength; i++) {
  generatedResult = generatedResult + finalArray[Math.floor(Math.random()*finalArray.length)];
  }

  // If generator is used more than once, this will reset the array so that it does not include unwanted critera after the first use.

  finalArray = [];
  return generatedResult;
}

// Executes the password criteria function to prompt the user, and input the generated password text into the text area.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Exectutes the function to write the password once the generate button is clicked. 

generateBtn.addEventListener("click", writePassword);
