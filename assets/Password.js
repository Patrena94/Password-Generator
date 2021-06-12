//Assignment code here
var generatePassword=function(){ 
    var finalPassword=""//finalPassword.length
    var lowercase="abcdefghijklmnopqrstuvwxyz"
    var uppercase="abcdefghijklmnopqrstuvwxyz".toUpperCase ()
    var SpecialCharacters="!@#$%^&*()?~+_=-"
    var number ="0123456789"
    
    var passwordsize = prompt("how many characters would you like your password to contain?")
    
    console.log(passwordsize)

    var isLowerCase = confirm("Does your password include lowercase?")

    

    var isUppercase = confirm("Does your password include uppercase?")

  

    var isSpecialcharacter = confirm("Does your password include Special Characters?")


    var isnumber = confirm("Does your password include a number?")
    console.log(isLowerCase)

    if (isLowerCase) {
    var randomPickLowerCase=Math.floor(Math.random()*lowercase.length)
    var pickOneLowerCaseLetter=lowercase.charAt(randomPickLowerCase)
    finalPassword=finalPassword + pickOneLowerCaseLetter    
    }
    if (isUppercase){ var randomPickUppercase=Math.floor(Math.random()*uppercase.length)
    var pickOneUppercaseLetter=uppercase.charAt(randomPickUppercase)
    finalPassword=finalPassword + pickOneUppercaseLetter
    }
    
    if (isSpecialcharacter){ var randomPickSpecialcharacter=Math.floor(Math.random()*SpecialCharacters.length)
    var pickOneSpecialcharacter = SpecialCharacters.charAt(randomPickSpecialcharacter)
    finalPassword=finalPassword + pickOneSpecialcharacter }

    if (isnumber){randomPickNumber=Math.floor(Math.random()*number.length)
    var pickOneNumber = number.charAt(randomPickNumber)
    finalPassword=finalPassword + pickOneNumber
    }
    console.log(pickOneLowerCaseLetter, pickOneUppercaseLetter, pickOneSpecialcharacter, pickOneNumber)
   
    for(var i =0; i < 8; i++){console.log(finalPassword[i]); console.log(i)}
 
    return finalPassword
}
    //form generatePassword();

    var generateBtn = document.querySelector("#generate");

    //write password to the #password input
    function writePassword() { 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    }
    generateBtn.addEventListener("click", writePassword);