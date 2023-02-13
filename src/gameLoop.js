import gameBoard from "./gameboard-factory";
import player from "./player";
import pageLoad from "./pageLoad"


function gameLoop() {
    let gameBoardA = gameBoard();
    let gameBoardB = gameBoard();

    let playerA = player(gameBoardB);
    let playerB = player(gameBoardA);

    let ship1 = prompt("Please the coordinates of your ship. X and Y have a minumum value of 0 and a maximum of 6")
    let ship2 = prompt("Please the coordinates of your ship. X and Y have a minumum value of 0 and a maximum of 6")
    let ship3 = prompt("Please the coordinates of your ship. X and Y have a minumum value of 0 and a maximum of 6")
    
    let controler = {
        setShips: function() {
            gameBoardA.setShip(1, [ship1]);
            gameBoardA.setShip(1, [ship2]);
            gameBoardA.setShip(1, [ship3]);
            gameBoardB.setShip(1, [0, 4]);
            gameBoardB.setShip(1, [3, 0]);
            gameBoardB.setShip(1, [5, 6]);
        },
        turnCounter: 1,
        fillBoard: function() {

            let enemyBox = document.getElementById("enemyBox");
            let playerBox = document.getElementById("playerBox");

            enemyBox.innerHTML = "";
            playerBox.innerHTML = "";

            let self = this

            gameBoardB.grid.forEach((element) => {
                const tile = document.createElement("div")
                tile.id = "tile";
                enemyBox.appendChild(tile);

                if(element.length ==3 && element[2].timesHit == 1) {
                    tile.innerText = "HIT!"
                    tile.style.color = "#D80032";
                    tile.style.backgroundColor = "#FFC914"
                }

                for(let i =0; i < gameBoardB.missedAttacks.length; i++) {
                    if(gameBoardB.missedAttacks[i].toString() == element.toString()) {
                        tile.style.backgroundColor = "#AFC2D5"
                    }
                }

                tile.addEventListener("click", function() {
                    if(element.length == 3) { 
                        let coord = element.slice(0, -1);
                        let brackify = [coord];
                        playerA.attack(brackify);
                        self.turnControl();
                    } else {
                        this.style.backgroundColor = "#2C514C";
                        let coord = element
                        let brackify = [coord];
                        playerA.attack(brackify);
                        self.turnControl();
                    }
                })
            })
            gameBoardA.grid.forEach((element) => {
                const tile1 = document.createElement("div")
                tile1.id = "tile1";
                tile1.style.pointerEvents = "none";
                playerBox.appendChild(tile1);
                
                if(element.length ==3 && element[2].timesHit == 1) {
                    tile1.innerText = "HIT!"
                    tile1.style.color = "#D80032";
                    tile1.style.backgroundColor = "#FFC914"
                } else if (element.length ==3 && element[2].timesHit == 0) {
                    tile1.innerText = "SHIP"
                    tile1.style.color = "#D80032";
                }

                for(let i =0; i < gameBoardA.missedAttacks.length; i++) {
                    if(gameBoardA.missedAttacks[i].toString() == element.toString()) {
                        tile1.style.backgroundColor = "#AFC2D5"
                    }
                }
               
            })
        },
        turnControl: function() {
            this.fillBoard();
            this.turnCounter++
            this.gameOver();
            if(this.turnCounter % 2 == 0) {
                playerB.computerPlay()
                this.turnCounter++ 
                this.fillBoard();
                this.gameOver();
            }
        },
        gameOver: function() {
            let subheading = document.getElementById("subheading")
            if(gameBoardB.checkIfAllSunk()) {
                console.log("game over");
                subheading.innerHTML = "";
                subheading.innerText = "PLAYER 1 WINS!"
                return
            }
            if(gameBoardA.checkIfAllSunk()) {
                console.log("game over");
                subheading.innerHTML = "";
                subheading.innerText = "PLAYER 2 WINS!"
                return
            }
        }
        
    }

    return controler
  


    
}

export default gameLoop;