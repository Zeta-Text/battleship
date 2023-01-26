import ship from './ship-factory'

function gameBoard() {
    let index;
    let aGameBoard = {
        setShip: function (length , coord) {
            let newShip = ship(length);
            ships.push(newShip);
            grid[coord].push(newShip);
            return grid
        },
        receiveAttack: function (coord) {
            //if subarray at index has length of 2
            //push to missedattacks
            //else subarray[2].hit()
            if(grid[index].length == 2) {
                this.missedAttacks.push(coord);
                return this.missedAttacks;
            } else {
                //idk if thats how you access this obj, check later
                grid[index][3].hit();
            }
        },
        missedAttacks: [],
        checkIfAllSunk: function() {
            let counter = 0;
            shipsArr.forEach((element) => {
                if(element.sunkStatus == true) {
                    counter++;
                }
                if(counter == shipsArr.length) {
                    return true;
                } else {
                    return false;
                }
            })
        },
        convertToIndex: function(coord) {
           
           let target = coord.toString();
           for(var i = 0; i < grid.length; i++) {
               if(target == grid[i].toString()) {
                    index = i
                    return index
               }
           }
        }
    }
    return aGameBoard;
} 

export default gameBoard;

