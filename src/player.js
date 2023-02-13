import gameLoop from "./gameLoop"

function player(enemy) {
    let aPlayer = {
        enemyGameboard: enemy,
        attack: function(coord) {
            this.enemyGameboard.receiveAttack(coord)
            return 
        },
        computerAttacks: [],
        computerPlay: function() {
            let n = Math.floor(Math.random() * (48 - 0 + 1)) + 0
            let copy = [];
            this.enemyGameboard.grid.forEach((element) => {
                if(element.length == 3) {
                    copy.push(element.slice(0,-1))
                } else {
                    copy.push(element);
                }
            });
            let coord = copy.at(n);

            let checker = false;
            for(let i=0;i<this.computerAttacks.length;i++) {
                if(coord.toString() == this.computerAttacks[i].toString()) {
                    checker = true;
                    console.log(checker)
                    this.computerPlay()
                    return
                }
            }
            this.attack(coord);
            this.computerAttacks.push(coord);
          
           
            

            
            
            


        },
    }

    return aPlayer

};

export default player;