// DONT FORGET TO FINISH



// Assignment code here
const keys = {
numbers:String [0,1,2,3,4,5,6,7,8,9,]
symbol: "@$!*?^~% &",
upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lowerCase: "abcdefghijklmnopqrstuvwxyz"

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length, numbers, symbols, lowercase, uppercase) {
    const availableCharacters = [
        ...(numbers : []),
        ...(symbols : []),
        ...(lowercase : []),
        ...(uppercase : []),
    ];

    let password = "";

    if (availableCharacters.length === 0)
        return "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


