
var showAlert=alert("First use the slider to pick your password length by choosing between 8 and 128 characters");

var chooseCharacters= alert("make sure to check the boxes to set your password criteria, choose between upper case, numbers, and symbols");

const characterRange = document.getElementById("characterRange");
const characterNumber = document.getElementById("characterNumbers");
const upperCaseLetterElement = document.getElementById("upperCase");
const numberCharElement = document.getElementById("numberCharacters");
const symbolCharElement = document.getElementById("symbols");
const form = document.getElementById("password1");

characterRange.addEventListener("input", numberOfCharacters);
characterNumbers.addEventListener("input",numberOfCharacters);

form.addEventListener("submit", event => {
    event.preventDefault()
    const characterNumbers = characterNumber.value;
    const upperCase = upperCaseLetterElement.checked;
    const numberCharacters = numberCharElement.checked;
    const symbols = symbolCharElement.checked;
    const password = generatePassword(characterNumbers, upperCase, numberCharacters, symbols);
});

function generatePassword()
//function to try to get the slider to match with the amount in box
function numberOfCharacters(e) {
    const value = e.target.value
    characterRange.value = value
    characterNumber.value = value;
};

var password= "";
 var passwordValues ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqqrstuvwxyz1234567890!@#$%&*()^_+";
    
    for (i=0; i<=l; i++) {
        password += passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length)));
     }
   {return password;
};
//     document.getElementById("display".value) = "password";


// document.querySelector ("#generate").addEventListener("click", function() {
//     var promptNumber = prompt("choose password length, between 8 and 128 characters");
//     alert(PromptNumber);
// })
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// document.getElementsByClassName(".btn").onclick= function() {
//     prompt("choose password lengtteh, between 8 and 128 characters")
// };

// // Write password to the #password input
// function writePassword() {
//   // you can create a function named generatePassword that creates the password

    



//   var password = generatePassword( {
//   passwordText.value = password;    
  
  
//   });
//   var passwordText = document.querySelector("#password");

  

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// //add password to text/display area

// document.getElementById



