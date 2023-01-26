import ship from "./ship-factory";
import gameBoard from "./gameboard-factory";

let grid;
let ships;
let ship1;
let gameBoard1;
let gameBoardReal;

jest.mock("./ship-factory")

beforeEach(() => {
grid = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2],
        [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
        [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6]
]
ships = []
gameBoardReal = gameBoard();
});


test("ship is placed on gameboard", () => {
    gameBoardReal.setShip(1,3)
    expect(grid[3].length).toBe(3)

    gameBoardReal.setShip(2,10)
    expect(grid[10].length).toBe(3)
});

test("converts coordinates to index in array", () => {
    expect(gameBoardReal.convertToIndex([1,0])).toBe(1)
});

