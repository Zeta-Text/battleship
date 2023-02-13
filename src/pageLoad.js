import gameBoard from "./gameboard-factory";
import player from "./player"


function pageLoad() {
    const content = document.getElementById("content");

    const heading = document.createElement("div");
    heading.id = "heading"
    heading.innerText = "BATTLESHIP!"
    content.appendChild(heading)

    const subheading = document.createElement("div");
    subheading.id = "subheading";
    subheading.innerText = "CLICK TO ATTACK!"
    content.appendChild(subheading)

    const enemyBox = document.createElement("div");
    enemyBox.id = "enemyBox";
    content.appendChild(enemyBox);

    const playerBox = document.createElement("div");
    playerBox.id = "playerBox";
    content.appendChild(playerBox);

}



export default pageLoad;


