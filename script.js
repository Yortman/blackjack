let firstCard = 7
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let totalEl = document.querySelector("#total-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    totalEl.textContent = "Total: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " / " + secondCard
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You got blackjack!"
        hasBlackJack = true
    } else {
        message = "Sorry, you are bust!"
        isAlive = false
    }
        messageEl.textContent = message
}

function newCard()  {
    message = "Drawing a new card from the deck!"
    messageEl.textContent = message
}
