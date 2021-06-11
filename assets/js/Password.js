//Assignement code here
var generatePassword=function(){ 
    var finalPassword=""//finalPassword.length
    var lowercase="abcdefghijklmnopqrstuvwxyz"
var uppercase="abcdefghijklmnopqrstuvwxyz".toUpperCase ()
var SpecialCharacters="!@#$%^&*()?~+_=-"
var number ="0123456789"

var passwordsize=promp("how many characters would you like your password to contain?")
console.log(passwordsize)

var randomPickLowerCase=Math.floor(Math.random()*lowercase.length)
var pickOneLowerCaseLetter=lowercase.charAt(randomPickLowerCase)
console.log(isLowercase)
if (isLowerCase) {}
var randomPickUpperCase=Math.floor(Math.random()*uppercase.length)
var pickOneUppercaseLetter=uppercase.charAt(randomPickUpperCase)
if (isuppercase){}
var randomPickSpecial=Math.floor(Math.random()*SpecialCharacters.length)
var pickOneSpecialCharacterletter=SpecialCharacters.charAt(randomPickSpecial)
If (isSpecialcharacter){}
var randomPickNumber=Math.floor(Math.random()*number.length)
var pickOneNumber=number.charAt(randomPickNumber)
If(isnumber){}
console.log(pickOneLowerCaseLetter, pickOneUppercaseLetter, pickOneSpecialCharacterletter, pickOneNumber)
var finalPassword=""
return finalPassword
}

//form generatePassword();

var generateBtn+document.querySelector("#generate");

//write password to the #password input
function writePassword() {
var password="" 
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

generaBtn.addEventListener("click", writePassword);