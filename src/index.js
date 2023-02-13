import _ from 'lodash';
import css from "./styles.css"
import ship from './ship-factory'
import gameBoard from "./gameboard-factory";
import player from "./player";
import pageLoad from "./pageLoad"
import gameLoop from "./gameLoop"


pageLoad();
let game = gameLoop();
game.setShips();
game.fillBoard();

//seems like hitting a ship makes other tiles unclickable 
//until you hit another ship
//check if missed attacks array contains coord
//if yes, display light color
//