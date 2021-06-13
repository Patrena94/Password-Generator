 # Password-Generator
set up github inclusive of readme files, branches and issues.
additional starter code provided by instructor. 
edited and expanded upon starter code.
since, I did not clone the original file. manually added and updated style.css and index.
updated background color to black.
added .btn to style.css and changed background color to btn to red
added radius to the btn class to corners.
Changed the card background to hot pink
changed the card body background to Gray.
add confirmation questions/confirmation
add For Loop    
manually added and updated style.css from float to media.
added finalPassword prompt question.
  min-height:200px;
  Removed the below from Javascript.       
    var passwordsize =["lowercase","uppercase", "Special character", "number"] //0 to 3
    for(var i =0; i < 8; i++){console.log(finalPassword.length[i]); console.log(i)}
    for (var i =0; i < .finalPassword.length; i++) {passwordsize < finalPassword.length; index++);
    const finalPassword = passwordsize[i];  
changed button color to lime green
added and active element to change the button to purple when clicked.
 let Characters= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ||}}[]:;'<>.,!@#$%^&*()?~+_=-0123456789"
   let passwordlength = 8
   let passwordValue ="final Password";
   
   for(let i = 0; i <passwordLength; i++) {
   let number = Math.floor(Math.random()*Characters.length);
   passwordValue += Characters.substring(number, number + 1)
}
Removed the below code determined to be unnecessary for generating a password.
) {
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
    added footer