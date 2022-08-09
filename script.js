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

choices.forEach(choice => {
    console.log(choice.checked)
    choice.addEventListener('click', () => {
        if(choice.id === 'uppercase' && choice.checked) {
            console.log("hello world");
        }
        else {
            console.log("no world");
        }
    })
})