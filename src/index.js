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
let carrier = new Ship(5);
let battleship = new Ship(4);
let destroyer = new Ship(3);
let submarine = new Ship(3);
let patrolboat = new Ship(2);

//AI Ships
let carrierAI = new Ship(5);
let battleshipAI = new Ship(4);
let destroyerAI = new Ship(3);
let submarineAI = new Ship(3);
let patrolboatAI = new Ship(2);

//gameBoards
let playerBoard = new GameBoard();
let aiBoard = new GameBoard();

//create players
let player = new Player("Kuzuha");
let ai = new AI("AI", player, playerBoard);

//place player ships
playerBoard.placeShip(carrier, 0, 0);
playerBoard.placeShip(battleship, 1, 0);
playerBoard.placeShip(destroyer, 2, 0);
playerBoard.placeShip(submarine, 3, 0);
playerBoard.placeShip(patrolboat, 4, 0);
//randomly place ai ships
placeAIShip(carrierAI);
placeAIShip(battleshipAI);
placeAIShip(destroyerAI);
placeAIShip(submarineAI);
placeAIShip(patrolboatAI);

//create html boards
createBoard("playerBoard");
createBoard("aiBoard");
updateDisplay("playerBoard", playerBoard);
updateDisplay("aiBoard", aiBoard);

function placeAIShip(ship) {
  while (true) {
    let numberArray = [];
    let firstNumber = Math.floor(Math.random() * 10);
    let secondNumber = Math.floor(Math.random() * 10);
    numberArray = [firstNumber, secondNumber];
    if (
      aiBoard.chechIfShipPlacementIsValid(
        ship.getShipLength(),
        numberArray[0],
        numberArray[1]
      )
    ) {
      aiBoard.placeShip(ship, numberArray[0], numberArray[1]);
      break;
    }
  }
}

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
  updateDisplay("aiBoard", aiBoard);
  if (aiBoard.checkIfAllShipSunk()) {
    alert("Player is the winner");
  }

  ai.generateRandomAttack();
  updateDisplay("playerBoard", playerBoard);
  if (playerBoard.checkIfAllShipSunk()) {
    alert("AI is the winner");
  }
}

function updateDisplay(boardName, board) {
  let boardArray = board.getGameBoard();
  let missedAttacksArray = board.getMissedAttacksArray();

  boardArray.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell.shipName) {
        if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ==
          true
        ) {
          let selectedCell = document.querySelector(
            `.${boardName} [data-x="${x}"][data-y ="${y}"]`
          );
          selectedCell.textContent = "X";
          selectedCell.classList.add("hit");
          selectedCell.classList.remove("occupied");
        } else if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ==
          false
        ) {
          if (boardName == "playerBoard") {
            let selectedCell = document.querySelector(
              `.${boardName} [data-x="${x}"][data-y ="${y}"]`
            );
            selectedCell.classList.add("occupied");
          }
        }
      }
    });
  });
  missedAttacksArray.forEach((attack) => {
    let selectedCell = document.querySelector(
      `.${boardName} [data-x="${attack.x}"][data-y ="${attack.y}"]`
    );
    selectedCell.textContent = "X";
    selectedCell.classList.add("missed");
  });
}
