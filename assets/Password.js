//Assignment code here
    var generatePassword=function(){ 
    var finalPassword=""//finalPassword.length
    var lowercase="abcdefghijklmnopqrstuvwxyz"
    var uppercase="abcdefghijklmnopqrstuvwxyz".toUpperCase ()
    var SpecialCharacters="!@#$%^&*()?~+_=-"
    var number ="0123456789"
    
    var Passwordsize = prompt("how many characters would you like your password to contain?")
  //  if(passwordsize < 8 || passwordsize > 128) {alert("enter a character size that is between 8 and 128");
 // }
   //  if(passwordsize >= 8 && passwordsize <=128) {//prompts for password critera
   // } 

    var isLowerCase = confirm("Does your password include lowercase?")


    var isUppercase = confirm("Does your password include uppercase?")

  

    var isSpecialcharacter = confirm("Does your password include Special Characters?")


    var isnumber = confirm("Does your password include a number?")
 
   // var Passwordsize ="";
  //  for(var i=0; i < passwordsize; i++) {
  //  var trueRandom = RandomChar[Math.floor(Math.random() * RandomChar.length)]; 
  //  Passwordsize += trueRandom;
 //   }
    

  //(let index = 0, index < Passwordsize.length; index++) { 
    //var finalPassword = [lowercase, uppercase, SpecialCharacters, number];{
   
    if (isLowerCase=true) {
    var randomPickLowerCase=Math.floor(Math.random()*lowercase.length)
    var pickOneLowerCaseLetter=lowercase.charAt(randomPickLowerCase)
    finalPassword=finalPassword + pickOneLowerCaseLetter;    
    }
    if (isUppercase=true){ var randomPickUppercase=Math.floor(Math.random()*uppercase.length)
    var pickOneUppercaseLetter=uppercase.charAt(randomPickUppercase)
    finalPassword=finalPassword + pickOneUppercaseLetter;
    }
    
    if (isSpecialcharacter=true){ var randomPickSpecialcharacter=Math.floor(Math.random()*SpecialCharacters.length)
    var pickOneSpecialcharacter = SpecialCharacters.charAt(randomPickSpecialcharacter)
    finalPassword=finalPassword + pickOneSpecialcharacter;
    }
    if (isnumber=true){randomPickNumber=Math.floor(Math.random()*number.length)
    var pickOneNumber = number.charAt(randomPickNumber)
    finalPassword=finalPassword + pickOneNumber;
    }
    console.log(pickOneLowerCaseLetter, pickOneUppercaseLetter, pickOneSpecialcharacter, pickOneNumber)
   
    return finalPassword   
}
    //form generatePassword();

    var generateBtn = document.querySelector("#generate");

    const passwordmin =8;
    const passwordMax = 128;

    //write password to the #password input
    function writePassword() { 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    }
    generateBtn.addEventListener("click", writePassword);
    
