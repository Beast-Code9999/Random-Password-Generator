const display = document.querySelector('.display');
let displayText = display.textContent;

const sentences = [
    "WELCOME", 
    'THIS IS A RANDOM PASSWORD GENERATOR',
    'PLEASE SELECT THE OPTIONS YOU LIKE',
    'THE COST IS FREE',
    'SIMPLY CLICK GENERATE WHEN YOU ARE DONE',
    "ENJOY"
]

let index = 0;
let timer = setInterval(onTick, 2000)


function onTick() {
    const sentence = sentences[index];
    display.textContent = sentence;
    index++
    if(index === sentences.length) {
        complete();
        return
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}