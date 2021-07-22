// Scope

let x = "global scope"
let y = "A very important variable regulating your bank account."

function playFunc(parameter){
    y = "global scope y"                // change declaration
    let z = "function/local scope"
    for(let i = 0; i<parameter; i++){   //change declaration
        let a = "block scope"
        console.log(i)
    }
    
}

// playFunc(7)
// console.log(y)

// Defining a function

function welcomeUser(userName){
    console.log("Welcome Back", userName)
    return (`The user loggin in is ${userName}`)
}
let user = "John Wayne"
// let xX = welcomeUser(user)
// console.log(xX)

function giveMeMore(num1, num2){
    return num1 + num2 
}

let bankAccount = 0

bankAccount += giveMeMore(45, 50)
//  0 += 95

console.log(bankAccount)

let arr = ["a", "s", "d"]
let arr1 = [1,2,3,4,5]

function printArrNums(array){
    //within here the original line 40 arr is over written
    let arr = [4,5,6,7]
    for(let i = 0; i < array.length; i++){
        console.log(arr[i])
    }
    
}

// printArrNums(arr1)
// console.log(arr)

// Parts: fucntion keyword, name, parameters, code to execute,return?


// Invoking/calling a function


// Objects

let name = ["Mike", "Jim", "Dave"]

let Mike = {
    name: "Mike",
    job: "Coder",
    alive: true,
    weight: 160,
    hobbies: ["swimming", "sailing", "fishing"],
    eat: function eat(){ this.weight += 5}
}

// Mike.eat()
// console.log(Mike.weight)

// Begin creation of a video game!
const HAMMER = {
    name: "Hammer",
    hands: 1,
    powerMultiplier: 2,
}
const FEATHER = {
    name: "Feather",
    hands: 1,
    powerMultiplier: 0,
}

let player1 = {
    name : "Bob Dylan",
    life: 50,
    level : 5,
    hitPower: 2,
    weaponsInventory: [HAMMER, FEATHER],
    powerAttack: function hit(opponent){
        opponent.life -= this.hitPower
        if(opponent.life <= 0){
            console.log(`${opponent.name} has died.`)
            console.log("Game Over")
        } else {
            console.log(`${opponent.name} has ${opponent.life} life points left.`)
        }
    },
    useWeapon: function useWeapon(weapon, opponent){
        opponent.life -= weapon.powerMultiplier * this.hitPower
        if(opponent.life <= 0){
            console.log(`${opponent.name} has died.`)
            console.log("Game Over")
        } else {
            console.log(`${opponent.name} has ${opponent.life} life points left.`)
        }
    },
}
let player2 = {
    name: "Jack",
    life: 5,
    hitpower: 4
}
player1.useWeapon(HAMMER, player2)
player1.useWeapon(HAMMER, player2)