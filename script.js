
generateBtn = document.querySelector("#generate");

generateBtn.onclick = function generatePassword() {

  var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var special = ['!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '?', '>', '<', '/', ';', '"', "'", '.', '/'];
  var passwordCharacters = [];
  var passwordLength = prompt("Please enter password length");

 
 

  if (isNaN(passwordLength))
  alert("Please provide a number");
else {
  var length = Number(passwordLength);
  if (length < 8 || length > 128)
      alert("Please enter a value between 8 and 128");
  else {
    var includeNumerics = confirm("Must click 'OK' to include Numeric characters");
      if (includeNumerics)
          passwordCharacters = passwordCharacters.concat(numerics);

    var includeUpperCase = confirm("Must click 'OK' to include to include Upercase letters");
      if (includeUpperCase)
          passwordCharacters = passwordCharacters.concat(uppercase);
      
    var includeLowerCase = confirm("Must click 'OK' to include Uppercase letters");
      if (includeLowerCase)
          passwordCharacters = passwordCharacters.concat(lowercase);

    var includeSpecial = confirm("Must click 'OK' to include special characters");
      if (includeSpecial)
          passwordCharacters = passwordCharacters.concat(special);

      var password = "";

      for (var i = 0; i < length; i++) {
          var index = Math.floor(Math.random() * passwordCharacters.length);
          password += passwordCharacters[index];
      }
      writePassword(password);
     
  }
}
}


function writePassword(password) {
var passwordText = document.querySelector("#password");
passwordText.value = password;
}




