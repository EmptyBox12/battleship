import { Ship } from "./ship.js";
import {GameBoard} from "./gameBoard.js";
import {Player} from "./player.js";

test("ship should return array as long as length",()=>{
  const length = 3;
  const admiral = new Ship(length);
  expect(admiral.getShipLength()).toBe(3);
});
test("ship should have an array of objects with hit property",()=>{
  const admiral = new Ship(2);
  const object = [{hit:false},{hit:false}];
  expect(admiral.getShip()).toEqual(object);
});
test("ship should be hittable",()=>{
  const admiral = new Ship(3);
  admiral.hit(1);
  expect(admiral.getShip()[1]).toEqual({hit:true});
});
test("ship should be sinkable",()=>{
  const admiral = new Ship(1);
  admiral.hit(0);
  expect(admiral.isSunk()).toBe(true);
});
test("gameboard returns 2d array", ()=>{
  const board = new GameBoard();
  expect(board.getGameBoard().length).toBe(10);
  expect(board.getGameBoard()[0].length).toBe(10);
});
test("gameboard array elements has the right object",()=>{
  const board = new GameBoard();
  const object = {shipName: undefined, shipIndex: undefined}
  expect(board.getGameBoard()[0][0]).toEqual(object);
});
test("gameboard can place ship",()=>{
  const board = new GameBoard();
  const admiral = new Ship(2);
  let x = 1;
  let y = 2;
  board.placeShip(admiral, x, y);
  expect(board.getGameBoard()[2][1]).toEqual({shipName: admiral, shipIndex: 0});
  expect(board.getGameBoard()[3][1]).toEqual({shipName: admiral, shipIndex: 1});
});
test("gameboard can receieve attack when there is a ship", ()=>{
  let board = new GameBoard();
  let admiral = new Ship(2);
  board.placeShip(admiral, 0, 0);
  board.receiveAttack(0,1);
  expect(admiral.getShip()[1].hit).toBe(true);
});
test("gameboard keeps track of missed attacks", ()=>{
  let board = new GameBoard();
  let object = {x:0,y:0};
  board.receiveAttack(0,0);
  expect(board.getMissedAttacksArray()[0]).toEqual(object)
});
test("gameboard can check if every ship is sunk", ()=>{
  let board = new GameBoard();
  let admiral = new Ship(1);
  let cat = new Ship(1);
  board.placeShip(admiral, 0, 0);
  board.placeShip(cat,3,4);
  board.receiveAttack(0,0)
  expect(board.checkIfAllShipSunk()).toBe(false);
});
test("player should have name", ()=>{
  const player1 = new Player("John");
  expect(player1.getName()).toMatch("John");
});
test("player ending turn starts enemy turn", ()=>{
  const player1 = new Player("John");
  const player2 = new Player("Admin");
  player1.endTurn(player2);
  expect(player1.checkTurn()).toBe(false);
  expect(player2.checkTurn()).toBe(true);
});
test("player can attack board if they have turn", ()=>{
  const player1 = new Player("John");
  const player2 = new Player("Kuzuha");
  const board = new GameBoard();
  const admiral = new Ship(1);
  board.placeShip(admiral, 0, 0);
  player1.attack(board, 0, 0, player2);
  expect(admiral.getShip()[0].hit).toBe(true);  
});
test("player attacking ends turn and starts enemy turn", ()=>{
  const player1 = new Player("John");
  const player2 = new Player("Kuzuha");
  const board = new GameBoard();
  const admiral = new Ship(1);
  board.placeShip(admiral, 0, 0);
  player1.attack(board, 0, 0, player2);
  expect(player1.checkTurn()).toBe(false);
  expect(player2.checkTurn()).toBe(true);
});