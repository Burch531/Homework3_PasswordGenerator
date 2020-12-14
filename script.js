// Declare variables
var numLength;
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var choices = [];

var confirmNumLength = "";


var generateBtn = document.querySelector("#generate");

//function that start when button is clicked
function generatePassword() {
    var confirmNumLength = parseInt(prompt("What is the length you would like your password, pick a number between 8 and 128?"));
    //if and else if statements if user enters anything outside of 8-128 will end the function
    if (confirmNumLength < 8 || confirmNumLength > 128) {
        alert('Must be a number between 8 an 128');
        return;
    }
    else if (!confirmNumLength) {
        alert('This needs a number between 8 and 128!');
        return;
    }

    // user can click ok or cancel for each variable 
    var confirmSpecialChar = confirm('Will this contain Special Characters?');
    var confirmUpperCase = confirm('Will this contain Upper Case letters?');
    var confirmLowerCase = confirm('Will this contain Lower Case letters?');
    var confirmNumber = confirm('Will this contains Numbers?');
    //if no options are picked function will end must have one variable for a password
    if (!specialChar && !upperCase && !lowerCase && !number) {
        alert("You must pick at least one!!");
        return;
    }

    //if statements that will create the choices from each of the confirm options

    if (confirmNumber) {
        choices = choices.concat(number)
    }

    if (confirmSpecialChar) {
        choices = choices.concat(specialChar)
    }

    if (confirmUpperCase) {
        choices = choices.concat(upperCase)
    }

    if (confirmLowerCase) {
        choices = choices.concat(lowerCase)
    }

    var password = "";
    // for loop to create random password that will repeat the number of times that the user entered for the length of the password
    for (var i = 0; i < confirmNumLength; i++) {
        var randomCharacters = choices[Math.floor(Math.random() * choices.length)];
        password += randomCharacters
    }

    return password;

};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


