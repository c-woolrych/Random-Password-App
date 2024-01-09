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
let passwordLength = "";
let characterTypes = "";

function getPasswordOptions() {
  passwordLength = (prompt ('How many characters would you like your password to be? (between 8 and 128)'));
  while (passwordLength < 8 || passwordLength > 128 || passwordLength % 1 !== 0) {
      alert ('Please choose between 8 and 128 characters.');
  passwordLength = (prompt ('How many characters would you like your password to be? (between 8 and 128)'));
  }

  lowerCasedCharacters = confirm('Click "ok" if you would like to use lower case characters.');
  if (lowerCasedCharacters) {
    characterTypes += lowerCasedCharacters;
  } 

  upperCasedCharacters = confirm('Click "ok" if you would like to use upper case characters.');
  if (upperCasedCharacters) {
    characterTypes += upperCasedCharacters;
  }

  numericCharacters = confirm('Click "ok" if you would like to use numeric characters.');
  if (numericCharacters) {
    characterTypes += numericCharacters;
  }

  specialCharacters = confirm('Click "ok" if you would like to use special characters.');
  if (specialCharacters) {
    characterTypes += specialCharacters;
  }

  if (characterTypes) {
    passwordLength += characterTypes;
  } else if (lowerCasedCharacters === false && upperCasedCharacters === false && numericCharacters === false && specialCharacters === false) {
    alert ('At least one character type must be selected.');
    getPasswordOptions();
  }
}

// getPasswordOptions()

// Function for getting a random element from an array
function getRandom(...arrays) {
  // lowerCasedCharacters[(Math.floor(Math.random() * lowerCasedCharacters.length))];
  // upperCasedCharacters[(Math.floor(Math.random() * upperCasedCharacters.length))];
  // numericCharacters[(Math.floor(Math.random() * numericCharacters.length))];
  // specialCharacters[(Math.floor(Math.random() * specialCharacters.length))];

  const randomElements = [];

  for (const array of arrays) {
    const randomElement = array[randomElements];
    randomElements = array
  }
}

getRandom()
console.log(getRandom);
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