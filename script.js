var input1 = document.getElementById("userInput1");
var input2 = document.getElementById("userInput2");

function doCalculation()
{
    console.log("Submit :D");
    switch(document.calcMain.calc.value)
    {
        case "addition":
        input1.value = Number(input2.value) + Number(input1.value);
        input2.value = "";
        break;

        case "subtraction":
        input1.value -= input2.value;
        input2.value = "";
        break;

        case "multiplication":
        input1.value *= input2.value;
        input2.value = "";
        break;

        case "division":
        input1.value /= input2.value;
        input2.value = "";
        break;

        case "modulus":
        input1.value %= input2.value;
        input2.value = "";
        break;
    }
}