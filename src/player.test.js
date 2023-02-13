import ship from "./ship-factory";
import gameBoard from "./gameboard-factory";
import player from "./player";

test("tests that enemy gameBoard is set", () => {
    let gameBoardA = gameBoard();
    let gameBoardB = gameBoard();

    let playerA = player(gameBoardB);
    let playerB = player(gameBoardA);

    expect(playerA.enemyGameboard).toBe(gameBoardB)
});

test("attacking updates turn counter", () => {
    let gameBoardA = gameBoard();
    let gameBoardB = gameBoard();

    let playerA = player(gameBoardB);
    let playerB = player(gameBoardA);

    playerA.attack([0,0])
    expect(playerA.turnCounter).toBe(2);
    playerA.attack([0,0])
    expect(playerA.turnCounter).toBe(3);

});

test("attacks hit enemy gameboard", () => {
    let gameBoardA = gameBoard();
    let gameBoardB = gameBoard();

    let playerA = player(gameBoardB);
    let playerB = player(gameBoardA);

    gameBoardA.setShip(1, [0,0]);
    gameBoardA.setShip(3, [3,0]);
    gameBoardB.setShip(1, [0,0]);
    gameBoardB.setShip(3, [3,0]);

    gameBoardB.grid[0][2].hit();
    playerA.enemyGameboard.receiveAttack([0,0])
    expect(gameBoardB.grid[0][2].timesHit).toBe(2)


    playerA.attack([0,0])
    playerA.enemyGameboard.grid[0][2].hit()
    expect(gameBoardB.grid[0][2].timesHit).toBe(4)

    playerA.attack([2,1])

    expect(playerA.enemyGameboard.grid[0][2].timesHit).toBe(4);
    expect(gameBoardB.missedAttacks.length).toBe(1)

    playerB.attack([3,0])
    expect(gameBoardA.missedAttacks.length).toBe(0)
    expect(gameBoardA.grid[3][2].timesHit).toBe(1)


});
