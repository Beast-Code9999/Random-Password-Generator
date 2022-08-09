const display = document.querySelector('.display');
const result = document.querySelector('.result');
const passwordLength = document.querySelector('.passwordLength > input');
const choices = Array.from(document.querySelectorAll('.choice > input'));

let uppercaseChecked = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChecked = "abscefghijklmnopqrstuvwxyz";
let numbersChecked = "1234567890"
let symbolsChecked = ""

console.log(uppercaseChecked);

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