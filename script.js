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
let selectedChoices = [uppercaseString];

// to listen for generate and copy password
window.addEventListener('click', function(event) {
    if(event.target.id === "generate") {
        generatePassword(currentPassLength)
    }

    if(event.target.id === "copy") {
        this.navigator.clipboard.writeText(result.textContent)
        this.alert("Text copied")
    }
    console.log(selectedChoices)
})

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let choiceId = choice.id;
        let choiceString = undefined;
        if(choice.id === 'uppercase') {
            choiceString = uppercaseString
        } 
        else if(choice.id === 'lowercase') {
            choiceString = lowercaseString
        }
        else if(choice.id === 'numbers') {
            choiceString = numbersString
        }
        else if(choice.id === 'symbols') {
            choiceString = symbolsString
        }
        if(choice.id === `${choiceId}` && choice.checked === true) {
            selectedChoices.push(choiceString)
            console.log(choiceString)
        }
        else if(choice.id === `${choiceId}` && choice.checked === false) {
            let myIndex = selectedChoices.indexOf(choiceString);
            if (myIndex !== -1) {
                selectedChoices.splice(myIndex, 1);
            }
        }
        console.log(selectedChoices)
    })
})



function generatePassword(length) {
    let password = ''
    let joinedPass = selectedChoices.join('')
    console.log(joinedPass)
    if(selectedChoices.length === 0) result.textContent = "please select at least one option"
    if(selectedChoices.length !== 0) {
        for(let i = 1; i <= length; i++) {
        password += joinedPass[Math.floor(Math.random() * joinedPass.length)]
        }
        result.textContent = password;
    }

}

passwordLength.addEventListener('change', function() {
    console.log(this.value)
})





