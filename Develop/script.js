// Assignment code here
// password arrays
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "X", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
spec = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//prompt user for password length between 8 and 128 characters
var characterLength = window.prompt("How many characters would you like your password to be? Choose between 8 and 128.");
if (characterLength < 8 || characterLength > 128 ) {
  // ask user to choose correctly
  alert("You must pick between 8 and 128.")
} else {
  // confirm lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
};
  // at least one character must be selected
if (!lowercase && !uppercase && !numeric && !specialCharacters) {
  alert("You must include at least one character type.");
} // if 3 options are selected
else if (lowercase && uppercase && numeric && specialCharacters) {
  options = lower.concat(upper, num, spec);
}
else if (lowercase && uppercase && numeric) {
  options = lower.concat(upper, num);
}
else if (lowercase && uppercase && specialCharacters) {
  options = lower.concat(upper, spec);
}
else if (lowercase && numeric && specialCharacters) {
  options = lower.concat(num, spec);
}
else if (uppercase && numeric && specialCharacters) {
  options = upper.concat(num, spec)
} // if 2 options are selected
else if (lowercase && uppercase) {
  options = lower.concat(upper);
}
else if (lowercase && numeric) {
  options = lower.concat(num);
}
else if (lowercase && specialCharacters) {
  options = lower.concat(spec);
}
else if (uppercase && numeric) {
  options = upper.concat(num);
}
else if (uppercase && specialCharacters) {
  options = upper.concat(spec);
}
else if (numeric && specialCharacters) {
  options = num.concat(spec);
} // if one option
else if (lowercase) {
  options = lower;
}
else if (uppercase) {
  options = upper;
}
else if (numeric) {
  options = num;
}
else if (specialCharacters) {
  options = spec;
};
// randomization
for (var i = 0; i < characterLength; i++) {
  var includedOptions = options[Math.floor(Math.random() * options.length)];
  password.push(includedOptions);
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
