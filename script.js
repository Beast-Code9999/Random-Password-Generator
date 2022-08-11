const display = document.querySelector('.display');
const result = document.querySelector('.result');
const passwordLength = document.querySelector('.passwordLength > input');
const choices = Array.from(document.querySelectorAll('.choice > input'));
const generate = document.querySelector('.generate');

const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseString = "abscefghijklmnopqrstuvwxyz";
const numbersString = "1234567890"
const symbolsString = "\`~!@#$%^&*()_+-=[]{}\\|;:\'\",<.>/?";

// console.log(uppercaseString[Math.floor(Math.random() * uppercaseString.length)])

let uppercaseChecked = true;
let lowercaseChecked = false;
let numbersChecked = false;
let symbolsChecked = false;
let currentPassLength = 8;


window.addEventListener('click', function(event) {
    choices.forEach(function(choice) {
        choice.addEventListener('click', function() {
            checkChoices(choice.id, choice.checked) 
        })
    })
        toConsole()
        console.log(selectedChoices)
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

function generatePassword(length, check) {
    let password = ''
    for(let i = 1; i <= length; i++) {
        let random = Math.floor(Math.random() * 4 + 1);
        if(random === 1 && uppercaseChecked === true) {
            password += uppercaseString[Math.floor(Math.random() * uppercaseString.length)];
        }
        if(random === 2 && lowercaseChecked === true) {
            password += lowercaseString[Math.floor(Math.random() * lowercaseString.length)];
        }
        if(random === 3 && numbersChecked === true) {
            password += numbersString[Math.floor(Math.random() * numbersString.length)];
        }
        if(random === 4 && symbolsChecked === true) {
            password += symbolsString[Math.floor(Math.random() * symbolsString.length)];
        }
    }
    result.textContent = password;
}


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
