const display = document.querySelector('.display');
const result = document.querySelector('.result');
const passwordLength = document.querySelector('.passwordLength > input');
const choices = Array.from(document.querySelectorAll('.choice > input'));


let uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseString = "abscefghijklmnopqrstuvwxyz";
let numbersString = "1234567890"
let symbolsString = "\`~!@#$%^&*()_+-=[]{}\\|;:\'\",<.>/?";
// console.log(symbolsString[Math.floor(Math.random() * symbolsString.length)])

let uppercaseChecked = false;
let lowercaseChecked = false;
let numbersChecked = false;
let symbolsChecked = false;

let ambitions = choices.forEach(choice => {
    choice.addEventListener('click', () => {
        checkChoices(choice.id, choice.checked)
        console.log(uppercaseChecked)
        console.log(lowercaseChecked)
        console.log(numbersChecked)
        console.log(symbolsChecked)
    })
})



console.log(uppercaseChecked)

function checkChoices(id, check) {
    if(id === "uppercase" && check === true) {
        uppercaseChecked = true;
    } 
    else if(id === "uppercase" && check === false) {
        uppercaseChecked = false;
    }
    if(id === "lowercase" && check === true) {
        lowercaseChecked = true;
    } 
    else if(id === "lowercase" && check === false) {
        lowercaseChecked = false;
    }
    if(id === "numbers" && check === true) {
        numbersChecked = true;
    } 
    else if(id === "numbers" && check === false) {
        numbersChecked = false;
    }
    if(id === "symbols" && check === true) {
        symbolsChecked = true;
    } 
    else if(id === "symbols" && check === false) {
        symbolsChecked = false;
    }
}
