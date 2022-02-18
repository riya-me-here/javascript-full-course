let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard

if(sum < 21){
    console.log("Do you want to draw another card?")
}
else if(sum === 21){
    console.log("Wohoo! You have got BlackJack!")
}
else if(sum>21){
    console.log("You're out of the game!")
}

