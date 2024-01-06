// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = "";
  passwordLength = (prompt ('How many characters would you like your password to be? (between 8 and 128)'));
  while (passwordLength < 8 || passwordLength > 128 || passwordLength % 1 !== 0) {
      alert ('Please choose between 8 and 128 characters.');
  passwordLength = (prompt ('How many characters would you like your password to be? (between 8 and 128)'));
  }

  const characterTypes = "";

  let lowerCase = confirm('Do you want to use lower case characters?');
  if (lowerCase) {
    characterTypes += lowerCase;
  }

  let upperCase = confirm('Do you want to use upper case characters?');
  if (upperCase) {
    characterTypes += upperCase;
  }

  let numeric = confirm('Do you want to use numeric characters?');
  if (numeric) {
    characterTypes += numeric;
  }

  let special = confirm('Do you want to use special characters?');
  if (special) {
    characterTypes += special;
  }
  

  while (lowerCase === false || upperCase === false || numeric === false || special === false) {
    alert ('At least one character type must be selected.');
    characterTypes = (confirm);
  }
}
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);