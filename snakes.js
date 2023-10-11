const prompt = require("prompt-sync")();

let user = prompt("Enter S, W or G")
let computer = Math.floor(Math.random()*3)
let cpu = ["S", "W", "G"][computer]
if(user == cpu){
  console.log("Its a draw")
}
else if(user=="S" && cpu =="W" || user=="W" && cpu=="G" || user=="G" && cpu=="S"){
  console.log("User wins")
}
else if(user=="W" && cpu =="S" || user=="G" && cpu=="W" || user=="S" && cpu=="G"){
  console.log("User loses")
}
else{
  console.log("Invalid :(")
}
