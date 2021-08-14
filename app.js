//Making a class alienShips to make a template
class alienShip {
    constructor() {
        // hitpoits
    this.hull = Math.floor(Math.random()*4) + 3
    // firepower
    this.firepower = Math.floor(Math.random()*3) + 2 
    // target accuracy
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10 
    
    }

    }
    
    //Making players ship
    const USSSchwarzenegger  = {
    hull: 20,//hp of ship
    firepower: 5,//the damage dealt by the ship
    accuracy: 0.7//The percent the ship has of hiting
    
}


    //random alien generator
    let enemyShip = []
    function shipGenerator(n) {
    for (let counter = 0; counter < n; counter++) {
    let alien = new alienShip()
    enemyShip.push(alien)
    console.log(enemyShip)
   
    }
    }
    //calling the function
   shipGenerator(bonusAiens())
console.log(USSSchwarzenegger)

    //Starting the battle
    function game() {
        //Informs the player of the situation and tells them the comands
    alert("Welcome to ElEarth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. mira's Universe! Are you ready to save this planet from Aliens? Get ready, you're now in charge of the USS ship!")
    action()

}
    game()

    //action is the function to either attack or run away
    function action() {
        if (USSSchwarzenegger.hull > 0) {
            let player = prompt("The enemies are coming in fast! Do you want to 'attack' or 'retreat'? The choice is yours") 
            if (player === "attack") {
                battle()
            }else if (player === "retreat"){
                retreat()
//reminds the player there are onlyt 2 options
            } else {
                alert('Only answer "attack" or "retreat"') 
            }
        
        }
         
        action()
            
    }
     
    function battle() {
        //if Uss has more accuracy then the ship will hit
           if (Math.random() < USSSchwarzenegger.accuracy) {
        enemyShip[0].hull -= USSSchwarzenegger.firepower
        if (enemyShip[0].hull <= 0) {
        enemyShip.shift()
          if (enemyShip.length >= 1) {
           progress()
            action()
        } else {
        win()
        }
             } else {
              enemy()
            }
             } else {
             missed()
              enemy()
           }
          }
    
    
    
//to find out if the enemy ship will hit
    function enemy() {
    if (Math.random() < this.accuracy) {
   USSSchwarzenegger.hull -= alienArmy[0].firepower
    if (USSSchwarzenegger.hull <= 0) {
    lose()
    } else {
    win()
    battle()
     }
    } else {
    battle()
    }

    }

    
    // Fuctions we are going to call during game
    
    function progress() {
    alert(
     `Congrats, you have destroyed an enemy ship. There are still ${enemyShip.length} more out there!`
    )
    }
    
    function missed() {
    alert(`Missed, Try again`)

    }
    
    function retreat() {
       alert(`Come back when you are ready. Goodbye.`)
     }

    function win() {
    alert(
        `Victory, you're safe for now!`)
    }

    function lose() {
    alert(`You lost!`)
    
}


function bonusAiens() { // empty parma to since its random we can past new ships
    let range = [7, 8, 9, 10]
    let bAliens = range[Math.floor(Math.random() * range.length)]// randomizing 
    return bAliens // returning what we requested
    }

