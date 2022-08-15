const result = document.querySelector('.result');
const choices = Array.from(document.querySelectorAll('.choice > input'));
// const passwordLength = document.querySelector('.passwordLength > input');
const generate = document.querySelector('.generate');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const numberLength = document.querySelector('#box span')

// the strings of each catergory, used through random indexing
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseString = "abscefghijklmnopqrstuvwxyz";
const numbersString = "1234567890"
const symbolsString = "\`~!@#$%^&*()_+-=[]{}\\|;:\'\",<.>/?";

// default input value
let currentPassLength = 10;
let selectedChoices = [uppercaseString];

// to listen for generate and copy password
window.addEventListener('click', function(event) {
    if(event.target.id === "generate") {
        generatePassword(currentPassLength)
    }

    if(event.target.id === "copy") {
        this.navigator.clipboard.writeText(result.textContent).then(function() {
            alert("Text copied");
        })
        
    }
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
        }
        else if(choice.id === `${choiceId}` && choice.checked === false) {
            let myIndex = selectedChoices.indexOf(choiceString);
            if (myIndex !== -1) {
                selectedChoices.splice(myIndex, 1);
            }
        }
    })
})

function generatePassword(length) {
    let password = ''
    let joinedPass = selectedChoices.join('')
    if(selectedChoices.length === 0) result.textContent = "PLEASE SELECT AT LEAST ONE OPTION"
    if(selectedChoices.length !== 0) {
        for(let i = 1; i <= length; i++) {
        password += joinedPass[Math.floor(Math.random() * joinedPass.length)]
        }
        result.textContent = password;
    }
}

next.addEventListener('click', add)
prev.addEventListener('click', subtract)

function add() { 
    currentPassLength += 1
    numberLength.textContent = currentPassLength
    if(+numberLength.textContent > 100) {
        numberLength.textContent = '8'
        currentPassLength = 8
    }
}

function subtract() {
    currentPassLength -= 1
    numberLength.textContent = currentPassLength
    if(+numberLength.textContent < 8) {
        numberLength.textContent = '100'
        currentPassLength = 100
    }
}