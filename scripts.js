var w = document.getElementsByClassName("w");
var i = document.getElementsByClassName("i");
var l = document.getElementsByClassName("l");
var o = document.getElementsByClassName("o");
var textInput = document.getElementById("userText");
var wrongStuff = document.getElementById("wrongStuff");
var numberWrong = 0;
var submit = document.getElementById("userSubmit");

submit.addEventListener("click", function()
{
    console.log("Button Press");
    switch(textInput.value)
    {
        case 'w':
            w[0].style.opacity = "1";
            w[1].style.opacity = "1";
            break;
        case 'i':
            i[0].style.opacity = "1";
            break;
        case 'l':
            l[0].style.opacity = "1";
            l[1].style.opacity = "1";
            break;
        case 'o':
            o[0].style.opacity = "1";
            break;
        default:
            wrongStuff.innerHTML += textInput.value;
            numberWrong++;
            console.log(numberWrong + " wrong");
            break;
    }
    if(numberWrong >= 10)
    {
        wrongStuff.innerHTML = "You Lose";
    }
    textInput.value ="";
});