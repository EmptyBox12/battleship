import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { AI } from "./ai.js";

const battleshipHTML = document.querySelector("#battleship");
const carrierHTML = document.querySelector("#carrier");
const submarineHTML = document.querySelector("#submarine");
const destroyerHTML = document.querySelector("#destroyer");
const patrolboatHTML = document.querySelector("#patrolboat");
const addShips = document.querySelector(".addShips");
const aiSide = document.querySelector(".aiSide");
const nameModal = document.querySelector("#modal");
const nameInput = document.querySelector("#nameInput");
const modalForm = document.querySelector("#modalContent");
const playerName = document.querySelector("#playerName");
const endGameContent = document.querySelector("#endGameContent");
const endGameModal = document.querySelector("#endGameModal");
const playAgainButton = document.querySelector("#playAgainButton");
const winnerText = document.querySelector("#winnerText");
//need to add end game modal and character create modal.

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
//make player ships draggable
dragStarter(battleshipHTML);
dragStarter(carrierHTML);
dragStarter(submarineHTML);
dragStarter(destroyerHTML);
dragStarter(patrolboatHTML);
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
//set player name
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = nameInput.value || "Player 1";
  player.setName(name);
  playerName.textContent = `${player.getName()}'s Board`;
  nameModal.style.display = "none";
});

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

function dragStarter(element) {
  element.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
}
//ship adding through drop
function dropShip(e) {
  let data = e.dataTransfer.getData("text");
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  switch (data) {
    case "battleship":
      if (playerBoard.chechIfShipPlacementIsValid(battleship.length, x, y)) {
        playerBoard.placeShip(battleship, x, y);
        updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
          aiSide.style.display = "flex";
        }
      }
      break;
    case "carrier":
      if (playerBoard.chechIfShipPlacementIsValid(carrier.length, x, y)) {
        playerBoard.placeShip(carrier, x, y);
        updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
          aiSide.style.display = "flex";
        }
      }
      break;
    case "submarine":
      if (playerBoard.chechIfShipPlacementIsValid(submarine.length, x, y)) {
        playerBoard.placeShip(submarine, x, y);
        updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
          aiSide.style.display = "flex";
        }
      }
      break;
    case "destroyer":
      if (playerBoard.chechIfShipPlacementIsValid(destroyer.length, x, y)) {
        playerBoard.placeShip(destroyer, x, y);
        updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
          aiSide.style.display = "flex";
        }
      }
      break;
    case "patrolboat":
      if (playerBoard.chechIfShipPlacementIsValid(patrolboat.length, x, y)) {
        playerBoard.placeShip(patrolboat, x, y);
        updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
          aiSide.style.display = "flex";
        }
      }
      break;
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
      } else if (boardName == "playerBoard") {
        cell.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        cell.addEventListener("drop", (e) => {
          e.preventDefault();
          dropShip(e);
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
  element.style.pointerEvents = "none";
  if (aiBoard.checkIfAllShipSunk()) {
    endGame(player.getName());
  }
  ai.generateRandomAttack();
  updateDisplay("playerBoard", playerBoard);
  if (playerBoard.checkIfAllShipSunk()) {
    endGame("AI");
  }
}
function endGame(winner) {
  endGameModal.style.display = "block";
  winnerText.textContent = `${winner} is the winner!!`;
}
//reloads the game
playAgainButton.addEventListener("click", ()=>{
  location.reload();
});
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
