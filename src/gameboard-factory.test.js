import ship from "./ship-factory";
import gameBoard from "./gameboard-factory";

let gameBoardReal;

beforeEach(() => {
gameBoardReal = gameBoard();
});


test("ship is placed on gameboard", () => {
    gameBoardReal.setShip(1, [3,0])
    expect(gameBoardReal.grid[3].length).toBe(3)

    gameBoardReal.setShip(2, [3,1])
    expect(gameBoardReal.grid[10].length).toBe(3)

    gameBoardReal.setShip(2, [2,2])
    expect(gameBoardReal.grid[34].length).toBe(2)

});

test("converts coordinates to index in array", () => {
    expect(gameBoardReal.convertToIndex([1,0])).toBe(1)
    expect(gameBoardReal.convertToIndex([0,1])).toBe(7)
});

test("converts coord to index, pushes missed attack to array" , () => {
    gameBoardReal.convertToIndex([0,0])
    expect(gameBoardReal.receiveAttack([0,0])).toContainEqual([0,0])
})

test("sets ship and hitting ship updates timesHit property" , () => {

    gameBoardReal.setShip(1, [3,0])

    expect(gameBoardReal.grid[3].length).toBe(3)
    expect(gameBoardReal.receiveAttack([3,0])).toBe(1)

  
    gameBoardReal.setShip(3, [0,4])
    expect(gameBoardReal.grid[28].length).toBe(3)
    gameBoardReal.receiveAttack([0,4])
    gameBoardReal.receiveAttack([0,4])
    expect(gameBoardReal.receiveAttack([0,4])).toBe(3)
  

})

test("pushes ships to the ships array, hits them, and tests that each are sunk." , () => {
  
    gameBoardReal.setShip(1, [0,0])
   
    gameBoardReal.receiveAttack([0,0])
    expect(gameBoardReal.checkIfAllSunk()).toBe(true)

   
    gameBoardReal.setShip(2, [0,1])
    gameBoardReal.receiveAttack([0,1])
    gameBoardReal.receiveAttack([0,1])
    expect(gameBoardReal.checkIfAllSunk()).toBe(true)

  
    gameBoardReal.setShip(3, [0,2])
    gameBoardReal.receiveAttack([0,2])
    gameBoardReal.receiveAttack([0,2])
    gameBoardReal.receiveAttack([0,2])
    expect(gameBoardReal.checkIfAllSunk()).toBe(true)


})


