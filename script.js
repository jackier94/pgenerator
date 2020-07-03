// var showAlert = alert(
//   "First use the slider to pick your password length by choosing between 8 and 128 characters"
// );

// var chooseCharacters = alert(
//   "make sure to check the boxes to set your password criteria, choose between upper case, numbers, and symbols"
// );

const characterRange = document.getElementById("characterRange");
const characterNumber = document.getElementById("characterNumber");
const upperCaseLetterElement = document.getElementById("upperCase");
const numberCharElement = document.getElementById("numberCharacters");
const symbolCharElement = document.getElementById("symbols");
const form = document.getElementById("generate-password");

const passwordOutput = document.getElementById("passwordOutput");

const upperCaseChart = allCharacters(65, 90);

const lowerCaseChart = allCharacters(97, 122);

const numberChartCode = allCharacters(48, 57);

const symbolChartCode = allCharacters(33, 47)
  .concat(allCharacters(58 - 64))
  .concat(allCharacters(91, 96))
  .concat(allCharacters(123, 126));

characterNumber.addEventListener("input", numberOfCharacters);
characterRange.addEventListener("input", numberOfCharacters);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterNumbers = characterNumber.value;
  const upperCase = upperCaseLetterElement.checked;
  const numberCharacters = numberCharElement.checked;
  const symbols = symbolCharElement.checked;
  const password = generatePassword(
    characterNumbers,
    upperCase,
    numberCharacters,
    symbols
  );
  passwordOutput.innerText = password;
  //   console.log(passwordOutput);
});

function generatePassword(
  characterNumbers,

  upperCase,
  numberCharacters,
  symbols
) {
  console.log(characterNumbers);
  //   String.fromCharCode(65);
  let chartCode = lowerCaseChart;
  console.log(lowerCaseChart);
  if (upperCase) chartCode = chartCode.concat(upperCaseChart);
  //   console.log(upperCaseChart);
  if (numberCharacters) chartCode = chartCode.concat(numberChartCode);

  if (symbols) chartCode = chartCode.concat(symbolChartCode);

  // looping through all characers
  const passwordCharacter = [];

  for (let i = 0; i < characterNumbers; i++) {
    const character = chartCode[Math.floor(Math.random() * chartCode.length)];
    passwordCharacter.push(String.fromCharCode(chartCode));
  }
  return passwordCharacter.join("");
}

function allCharacters(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function numberOfCharacters(e) {
  const value = e.target.value;
  characterNumber.value = value;
  characterRange.value = value;
}

// function generatePassword()
//function to try to get the slider to match with the amount in box
// function numberOfCharacters() {
//     const value = e.target.value
//     characterRange.value = value
//     characterNumber.value = value;
// };

// var password= "";
//  var passwordValues ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqqrstuvwxyz1234567890!@#$%&*()^_+";
//  var symbolValues= "!@#$%^&*()_+-";
//  var numberValues= "0123456789"

//     for (i=0; i<=l; i++) {
//         password += passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length)));
//      }
//    {return password;
// };
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

// document.getElementByI
