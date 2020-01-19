// Assignment Code
let lcInc = document.querySelector(".lowerCase");
let ucInc = document.querySelector(".upperCase");
let nmInc = document.querySelector(".numbers");
let scInc = document.querySelector(".specialChar");
let newPW = document.querySelector("#password");
let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "_"];

generateBtn.addEventListener("click", function writePassword(){
    let passwd = "";
    let sampleArray = [];
    let charLength = document.querySelector(".charLength").value;

    if (lcInc.checked == false && ucInc.checked == false && nmInc.checked == false &&
        scInc.checked == false) {
        alert("You must choose at least one character type!");
        };

    if (lcInc.checked == true) {
        sampleArray = sampleArray.concat(lowerCase);
    };
    
    if (ucInc.checked == true) {
        sampleArray = sampleArray.concat(upperCase);
    };

    if (nmInc.checked == true) {
    sampleArray = sampleArray.concat(numbers);
    };

    if (scInc.checked == true) {
    sampleArray = sampleArray.concat(specialChar);
    };

    for (i=1;i<=charLength;i++) {
        var rand = sampleArray[Math.floor(Math.random()*sampleArray.length)];
        passwd = passwd.concat(rand);
    }
    
    newPW.textContent = passwd;

    });



    










// Write password to the #password input
//function writePassword() {
   // var password = generatePassword();
   // var passwordText = document.querySelector("#password");

    //passwordText.value = password;

    //copyBtn.removeAttribute("disabled");
    //copyBtn.focus();
//}

//function copyToClipboard() {
    // BONUS 
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
