const display = document.querySelector('.display');
const result = document.querySelector('.result');
const passwordLength = document.querySelector('.passwordLength > input');
const choices = Array.from(document.querySelectorAll('.choice > input'));
const generate = document.querySelector('.generate');

const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseString = "abscefghijklmnopqrstuvwxyz";
const numbersString = "1234567890"
const symbolsString = "\`~!@#$%^&*()_+-=[]{}\\|;:\'\",<.>/?";
console.log(symbolsString[Math.floor(Math.random() * symbolsString.length)])

const randomUppercaseString = uppercaseString[Math.floor(Math.random() * uppercaseString.length)]
const randomLowercaseString = lowercaseString[Math.floor(Math.random() * lowercaseString.length)]
const randomNumberString = numbersString[Math.floor(Math.random() * numbersString.length)]
const randomSymbolString = symbolsString[Math.floor(Math.random() * symbolsString.length)]

console.log(randomUppercaseString, randomLowercaseString, randomNumberString, randomSymbolString)

let uppercaseChecked = true;
let lowercaseChecked = false;
let numbersChecked = false;
let symbolsChecked = false;
let currentPassLength = 8;

window.addEventListener('click', function(event) {
    choices.forEach(choice => {
            checkChoices(choice.id, choice.checked)
        })
        
        toConsole()
        console.log(event.target)

    if(event.target.id === "generate") {
        console.log(currentPassLength)
        generatePassword(currentPassLength)
    }

    if(event.target.id === "copy") {
        this.navigator.clipboard.writeText(result.textContent)
        this.alert("Text copied")
    }
    

})

function toConsole() {
    console.log(uppercaseChecked)
    console.log(lowercaseChecked)
    console.log(numbersChecked)
    console.log(symbolsChecked)
}

function chooseRandomChoices() {
    return Math.floor(Math.random() * 4 + 1)
}

function generatePassword(length) {
    let password = ''
    for(let i = 1; i <= length; i++) {
        if(chooseRandomChoices() === 1) {
            
        }
    }
}

console.log(generatePassword())

passwordLength.addEventListener('change', function() {
    console.log(this.value)
})




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
