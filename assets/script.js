var btn = document.querySelector("#genbutn");

function genPW() {
    let length = prompt ("Please choose a length between 8 to 128.")
    let lowercase = confirm ("Would you like to add lowercase letters?")
        lcase = "abcdefghijklmnopqrstuvwxyz";
        allchar = "";
        if (lowercase === true) {
            allchar = allchar+lcase;
          }
    let uppercase = confirm ("Would you like to add uppercase letters?")
        ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (uppercase === true) {
            allchar = allchar+ucase;
          }
    let numbers = confirm ("Would you like to add numbers?")
        numbs = "0123456789"
        if (numbers === true) {
            allchar = allchar+numbs;
        }
    let specials = confirm ("Would you like to add special characters?")
        specs = ".?,;'!@#$%&*"
        if (specials === true) {
            allchar = allchar+specs;
        }
        retVal = "";
    for (var i = 0, n = allchar.length; i < length; ++i) {
        retVal += allchar.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


function NewPW() {
    var PW = genPW();
    var PWTxt = document.querySelector("#pw");
 
    PWTxt.value = PW;
 }

btn.addEventListener("click", NewPW);