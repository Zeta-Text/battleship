import ship from './ship-factory'

function gameBoard() {
    let index;
    let aGameBoard = {
        grid: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
        [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6]
        ],
        ships: 0,
        missedAttacks: [],
        setShip: function (length, coord) {
            this.convertToIndex(coord);
            let newShip = ship(length);
            this.ships++
            this.grid[index].push(newShip);
            return this.grid
        },
        receiveAttack: function (coord) {

            // console.log("attack coords are " + coord)
            this.convertToIndex(coord);
            // console.log("the current index is " + index)
            if(this.grid[index].length == 2) {
                let brackify = [coord]
                this.missedAttacks.push(coord);
                // console.log("missed attacks below")
                console.log("miss")
                return this.missedAttacks;
            } else {
                this.grid[index][2].hit()
                this.grid[index][2].isSunk()
                console.log("hit!" + this.grid[index][2].timesHit)
                // console.log("times hit: " + this.grid[index][2].timesHit)
                return this.grid[index][2].timesHit
            }
        },
        checkIfAllSunk: function() {
            let counter = 0;
            this.grid.forEach((element) => {
                if(element.length == 3) {
                    element[2].isSunk();
                    if(element[2].sunkStatus == true) {
                        counter++
                    }
                }
            });

            if(counter == this.ships) {
                return true
            } else {
                return false
            }

        },
        convertToIndex: function(coord) {
           let target = coord.toString();
        //    console.log("coords to be converted are: " + coord)
        //    console.log("the target is: " + target)
           for(var i = 0; i < this.grid.length; i++) {
            //    console.log(this.grid[i])
        
               if(this.grid[i].length == 2) {
                    if(target == this.grid[i].toString()) {
                        // console.log("index will be: " + i)
                        index = i
                        // console.log("index is now: " + index)
                        return index
                    }
                } else if (this.grid[i].length == 3) {
                    let sliced = this.grid[i].slice(0, -1)
                    if(target == sliced.toString()) {
                        // console.log("index will be: " + i)
                         index = i
                        //  console.log("index is now: " + index)
                         return index
                    }
                }


           }
        }
    }
    return aGameBoard;
} 

export default gameBoard;





