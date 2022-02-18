let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let blackjack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    blackjack = true
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

// CASH OUT!
if(blackjack === true){
    console.log("CASH OUT")
}