let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let startEl = document.getElementById("start-el")
let newEl = document.getElementById("new-el")
let scoreEl = document.getElementById("score-el")
sumEl.textContent = ""
cardsEl.textContent = ""

let score = 0;
scoreEl.textContent = "Wins: " + score;



function startGame(){
    if(isAlive === false || hasBlackJack === true){
        let firstNumber = getRandomCard()
        let secondNumber = getRandomCard()
        sum = firstNumber + secondNumber;
        isAlive = true
        hasBlackJack = false;
        cards = [firstNumber,secondNumber]
        renderGame()
        newEl.classList.remove("alive")
        scoreEl.classList.remove("alive")
    }
}

function getRandomCard(){
    let number = Math.floor( Math.random() * 13) + 1;
    if (number > 10){
        return 10
    }else{
        return number
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum <= 20){
        message = "Do you want another card?";
    } else if(sum === 21){
        message = "Black Jack! You have won!!";
        hasBlackJack = true;
        score += 1
        scoreEl.textContent = "Wins: " + score;
    } else{
        message= "You have lost";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        cards.push(newCard)
        sum += newCard;
        renderGame()
    }
}





