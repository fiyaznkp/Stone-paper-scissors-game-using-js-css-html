// const hour = 24

// if(hour>6 && hour <12 ){
//     console.log("good morning")
// }else if(hour > 13 && hour <17){
//     console.log("good evening")
// }else{
//     console.log("good night")
// }

// const age =70

// const holiday = false

// if(age < 6 || age >65 && holiday){
//     console.log("you have special concern")
// }
// else{
//     console.log("no concern")
// }


// let guess = "heads"
// let result = ""
// const randonNumber = Math.random()

// if(randonNumber < 0.5 ){
//     result ="heads"
// }
// else{
//    result= "tails"
// }
// console.log(result)

// if(guess === result){
//     console.log("your guess is true")
// }else{
//     console.log("your guess is false")
// }

const randonNumber = Math.random()

let result =""

let guess ="tails"

result = randonNumber <= 0.5 ? "heads" :"tails"

console.log(result)

console.log(guess === result ? "your guess is true": "your guess is false")

