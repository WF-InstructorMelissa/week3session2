const Hammer = {
    name: "Hammer",
    hands: 1,
    powerMultiplier: 2,
}
const FEATHER = {
    name: "Feather",
    hands: 1,
    powerMultiplier: 0,
}

let playerOne = {
    name: "John Wayne",
    level: 50,
    hitPower: 50,
    life: 100,
    weaponsInventory: [Hammer, FEATHER],
    powerAttack: function hit(opponent){
            opponent.life = opponent.life - this.hitPower
            if(opponent.life <= 0){
                console.log(`${opponent.name} has died.`)
                console.log("Game Over")
            } else {
                console.log(`${opponent.name} has ${opponent.life} left.`)
            }
        },
    useWeapon: function useWeapon(weapon, opponent){
            opponent.life = opponent.life - weapon.powerMultiplier * self.hitPower
            if(opponent.life <= 0){
                console.log(`${opponent.name} has died.`)
                console.log("Game Over")
            }
        },
}

let playerTwo = {
    name: "John Denver",
    level: 30,
    hitPower: 10,
    life: 50
}
playerOne.powerAttack(playerTwo)