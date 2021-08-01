// generat ID selected and placed in variable generateBtn
var generateBtn = document.querySelector("#generate");

console.log("Listening?");
generateBtn.addEventListener("click", click);
console.log("Yup! Listening!");

function click() {
  console.log("FUNCTION> click");

  // establish strings of possible character sets
  var charLowers = "abcdefghijklmnopqrstuvwxyz";
  var charUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNums = "0123456789";
  var charSpecials = "!@#$%^&*()";
  var charPoolArray = [];
  console.log("variables");
  var charPool;
  var charNumber;
  var incLower;
  var incUpper;
  var incNumbers;
  var IncSpecial;

  var charNumber = prompt(
    "How many characters would you like your password to be?"
  );
  console.log(charNumber);
  // At least one must be confirmed
  var incLower = confirm("Include lowercase?");
  console.log(incLower);
  var incUpper = confirm("Include uppercase?");
  console.log(incUpper);
  var incNumbers = confirm("Include numbers?");
  console.log(incNumbers);
  var IncSpecial = confirm("Include special characters?");
  console.log(IncSpecial);

  console.log("ifs"); // compile the characters to go in the pool. If true, add to the array charPoolArray
  if (incLower) {
    charPoolArray.push(charLowers);
    console.log(charPoolArray);
  }
  if (incUpper) {
    charPoolArray.push(charUppers);
    console.log(charPoolArray);
  }
  if (incNumbers) {
    charPoolArray.push(charNums);
    console.log(charPoolArray);
  }
  if (IncSpecial) {
    charPoolArray.push(charSpecials);
    console.log(charPoolArray);
  }
  console.log("To String");
  // turn charPoolArray into a string
  var charPoolString = charPoolArray.toString();
  console.log(charPoolString);
  // remove all the commas
  charPoolString = charPoolString.replace(/,/g, "");
  console.log(charPoolString);
  // split all the characters up and create a single array
  var charPool = charPoolString.split("");
  console.log(charPool);

  console.log("RUN Write PW Function");
  writePassword();
  console.log("end Script");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log("FUNCTION> write password");
    return;
  }

  function generatePassword() {
    // create an empty string to be populated later
    var randomStr = "";

    // create a random character and loop it as many times as the user input variable charNumber

    // its not going into the for loop because chaNumber is undefined.
    for (var i = 0; i < charNumber; i++) {
      var randomNum = Math.floor(Math.random() * charPool.length);

      randomStr += charPool[randomNum];
    }
    return randomStr;
  }

  return;
}

// generatePassword();

// if a prompt is confimed add corresponding array index to empty arrray, convert the array to string, then split the string to get one big array.

// *****

// write function to generate random string
// function generate() {}

// funtion? to account for user choices and create an array of possible characters

// function pool1() {

// }

// document.querySelector("#status").textContent = "KEY DOWN Event";
// var keyPressed = event.key;
// var keyCode = event.code;
// console.log(keyCode);
// document.querySelector("#key").textContent = keyPressed;
// document.querySelector("#code").textContent = keyCode;
