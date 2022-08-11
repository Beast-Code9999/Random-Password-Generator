const display = document.querySelector('.display');
const result = document.querySelector('.result');
const choices = Array.from(document.querySelectorAll('.choice > input'));
const passwordLength = document.querySelector('.passwordLength > input');
const generate = document.querySelector('.generate');

const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseString = "abscefghijklmnopqrstuvwxyz";
const numbersString = "1234567890"
const symbolsString = "\`~!@#$%^&*()_+-=[]{}\\|;:\'\",<.>/?";

// console.log(uppercaseString[Math.floor(Math.random() * uppercaseString.length)])

let currentPassLength = 8;
let selectedChoices = [];

// to listen for generate and copy password
// window.addEventListener('click', function(event) {
//     if(event.target.id === "generate") {
//         console.log(currentPassLength)
//         generatePassword(currentPassLength)
//     }

//     if(event.target.id === "copy") {
//         this.navigator.clipboard.writeText(result.textContent)
//         this.alert("Text copied")
//     }
// })

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        (choice.id === 'uppercase' && choice.checked === true) ? selectedChoices.push(uppercaseString) : console.log(selectedChoices[0])

        console.log(selectedChoices)
    })
})

function generatePassword(length, check) {
    let password = ''
    for(let i = 1; i <= length; i++) {

    }
}

passwordLength.addEventListener('change', function() {
    console.log(this.value)
})





