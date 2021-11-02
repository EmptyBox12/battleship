import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { AI } from "./ai.js";

//first create players, boards and then place ships.
//then create grids using two for loops and give x,y and boardName data-sets(make it take boardname from outside. and use if to decide)
//add classes to all grid items. make sure to add addEventListener(click) to enemyBoard
//addEventListener should include player.attack(x,y, AI, aiBoard). Get coordinates from the data-sets
//after attacking it should update display for the ai and generate attack for ai and then update the player's display.

//updateDisplay(boardNameFromData, gameBoard) it should get board array and loop through it with 2 for loops.
//it should check if ship name is defined then it should check it that location is hit using shipIndex.
//if it is hit it should add hit class which should make it red and put an X.
//else it should make it green. (only if boardNameFromData is playerBoard. aiBoard shouldn't show ships)
//it should also check if the missed attacks array is bigger than 0.
//if it is forEach it should take the x and y objects. and using them with the boardNameFromData, it should put an X.

//Player Ships
const carrier = new Ship(5);
const battleship = new Ship(4);
const destroyer = new Ship(3);
const submarine = new Ship(3);
const patrolboat = new Ship(2);

//AI Ships
const carrierAI = new Ship(5);
const battleshipAI = new Ship(4);
const destroyerAI = new Ship(3);
const submarineAI = new Ship(3);
const patrolboatAI = new Ship(2);

//gameBoards
const playerBoard = new GameBoard();
const aiBoard = new GameBoard();

//create players
const player = new Player("Kuzuha");
const ai = new AI("AI", player, playerBoard);

//place player ships
playerBoard.placeShip(carrier, 0, 0);
playerBoard.placeShip(battleship, 1, 0);
playerBoard.placeShip(destroyer, 2, 0);
playerBoard.placeShip(submarine, 3, 0);
playerBoard.placeShip(patrolboat, 4, 0);
//place ai ships (write random ship placer. like the random attack)
aiBoard.placeShip(carrierAI, 0, 0);
aiBoard.placeShip(battleshipAI, 1, 0);
aiBoard.placeShip(destroyerAI, 2, 0);
aiBoard.placeShip(submarineAI, 3, 0);
aiBoard.placeShip(patrolboatAI, 4, 0);

//create boards
createBoard("playerBoard");
createBoard("aiBoard");

function createBoard(boardName) {
  let boardClass = document.querySelector(`.${boardName}`);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-x", j);
      cell.setAttribute("data-y", i);
      if (boardName == "aiBoard") {
        cell.addEventListener("click", (e) => {
          attackEvent(e.target);
        });
      }
      boardClass.appendChild(cell);
    }
  }
}
function attackEvent(element) {
  let x = element.getAttribute("data-x");
  let y = element.getAttribute("data-y");
  player.attack(x, y, ai, aiBoard);
  if (aiBoard.checkIfAllShipSunk()) {
    alert("Player is the winner");
  }
  ai.generateRandomAttack();
  if (playerBoard.checkIfAllShipSunk()) {
    alert("AI is the winner");
  }
}
