let drawnNumberList = [];
let secretNumber = generateRandomNumber();
let atempts = 1;

function displayTextOnScreen (tag, text){
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}

function displayInitialMessage(){
    displayTextOnScreen('h1', 'Secret number game');
    displayTextOnScreen('p', 'Choose a number betwen 1 and 100');
}
displayInitialMessage();

function checkGuess () {
    let guess = document.querySelector('input').value;

    if (guess == secretNumber){
        displayTextOnScreen('h1', 'Right');
        let atemptsWord = atempts > 1 ? 'Atempts' : 'Atempt';
        let messageAtempts = `you discovered the secret number with ${atempts} ${atemptsWord}!`;
        displayTextOnScreen('p', messageAtempts);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }else {
        if (guess > secretNumber){
            displayTextOnScreen('p', 'The secret number is smaller');
        }else{
            displayTextOnScreen('p', 'The secret number is bigger');
        }
        atempts ++;
        cleanCamp();
    }

}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * 100 + 1);
    if (drawnNumberList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        drawnNumberList.push(chosenNumber);
        console.log(drawnNumberList);
        return chosenNumber;
    }
}

function cleanCamp () {
    guess = document.querySelector('input');
    guess.value = '';

}

function restartGame(){
    secretNumber = generateRandomNumber();
    cleanCamp();
    atempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}