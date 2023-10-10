const prompt = require("prompt-sync")();

let score = 100
let guesses = 0
let rand_no = Math.floor(Math.random() * 11)
let guess = 0
do{
  guess = prompt("Enter a number ")
  if(guess==rand_no){
    console.log("Congratulations! you have guessed correctly!")
    score = score-guesses
  }
  else{
    console.log("Sorry! Try again :(")
    guesses++
  }
}while(guess!=rand_no)
console.log("Your score is ",score)
