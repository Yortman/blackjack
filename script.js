let player = {
    name: "Troy",
    chips: 150
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let totalEl = document.querySelector("#total-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) +1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame()  {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (  let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    totalEl.textContent = "Total: " + sum
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
        if (isAlive === true && hasBlackJack === false) {
            message = "Drawing a new card from the deck!"
            messageEl.textContent = message
            let card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()
    }
}

