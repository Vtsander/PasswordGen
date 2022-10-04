var btn = document.querySelector("#genbutn");

function genPW() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


function NewPW() {
    var PW = genPW();
    var PWTxt = document.querySelector("#pw");
 
    PWTxt.value = PW;
 }

btn.addEventListener("click", NewPW);