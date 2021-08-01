// generat ID selected and placed in variable generateBtn
var generateBtn = document.querySelector("#generate");

// event listener for click

generateBtn.addEventListener("click", click);

// click event function
function click() {
  // establish strings of possible character sets
  var charLowers = "abcdefghijklmnopqrstuvwxyz";
  var charUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNums = "0123456789";
  var charSpecials = "!@#$%^&*()";

  // initial array that stores chosen arrays of character types
  var charPoolArray = [];

  // this array will gather user inputs to evaluate if at least one type has been chosen
  var truth = [];

  var charPool;
  var charNumber;

  // user input choice values
  var incLower;
  var incUpper;
  var incNumbers;
  var IncSpecial;

  // While the user chooses a number outside of the scope (8-128) continue asking this question
  do {
    var charNumber = prompt(
      "How many characters would you like your password to be? (Between 8 & 128 charaters)"
    );
  } while (charNumber < 8 || charNumber > 128);

  // the truth array contains all boolean values for the following questions. If the engine doesn not find a single "true" in the array, these questions will be asked again.
  while (!truth.includes(true)) {
    var incLower = confirm("Include lowercase?");
    console.log(incLower);
    var incUpper = confirm("Include uppercase?");
    console.log(incUpper);
    var incNumbers = confirm("Include numbers?");
    console.log(incNumbers);
    var IncSpecial = confirm("Include special characters?");
    console.log(IncSpecial);

    var truth = [incLower, incUpper, incNumbers, IncSpecial];
    if (!truth.includes(true)) {
      alert("Please choose a character type.");
    }
  }

  // compile the characters to go in the pool. If true, add to the array charPoolArray to be manipulated later.
  if (incLower) {
    charPoolArray.push(charLowers);
  }

  if (incUpper) {
    charPoolArray.push(charUppers);
  }

  if (incNumbers) {
    charPoolArray.push(charNums);
  }

  if (IncSpecial) {
    charPoolArray.push(charSpecials);
  }

  // turn charPoolArray into a string
  var charPoolString = charPoolArray.toString();

  // remove all the commas
  charPoolString = charPoolString.replace(/,/g, "");

  // split all the characters up and create a single array
  var charPool = charPoolString.split("");

  // this function invokes the generate password function to create a random string. It takes that string and injects it into "#password" element
  writePassword();

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    return;
  }

  // creates an empty string (randomStr), uses a for loop to generate a series of random charaters and places them into the string.
  function generatePassword() {
    var randomStr = "";

    // create a random character and loop it as many times as the user input variable charNumber
    for (var i = 0; i < charNumber; i++) {
      var randomNum = Math.floor(Math.random() * charPool.length);

      randomStr += charPool[randomNum];
    }
    return randomStr;
  }

  return;
}
