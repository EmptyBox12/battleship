import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { AI } from "./ai.js";

describe("ship", () => {
  test("ship should return array as long as length", () => {
    const length = 3;
    const admiral = new Ship(length);
    expect(admiral.getShipLength()).toBe(3);
  });
  test("ship should have an array of objects with hit property", () => {
    const admiral = new Ship(2);
    const object = [{ hit: false }, { hit: false }];
    expect(admiral.getShip()).toEqual(object);
  });
  test("ship should be hittable", () => {
    const admiral = new Ship(3);
    admiral.hit(1);
    expect(admiral.getShip()[1]).toEqual({ hit: true });
  });
  test("ship should be sinkable", () => {
    const admiral = new Ship(1);
    admiral.hit(0);
    expect(admiral.isSunk()).toBe(true);
  });
  test("gameboard returns 2d array", () => {
    const board = new GameBoard();
    expect(board.getGameBoard().length).toBe(10);
    expect(board.getGameBoard()[0].length).toBe(10);
  });
});

describe("gameboard", () => {
  test("gameboard array elements has the right object", () => {
    const board = new GameBoard();
    const object = { shipName: undefined, shipIndex: undefined };
    expect(board.getGameBoard()[0][0]).toEqual(object);
  });
  test("gameboard can place ship", () => {
    const board = new GameBoard();
    const admiral = new Ship(2);
    let x = 1;
    let y = 2;
    board.placeShip(admiral, x, y);
    expect(board.getGameBoard()[2][1]).toEqual({
      shipName: admiral,
      shipIndex: 0,
    });
    expect(board.getGameBoard()[3][1]).toEqual({
      shipName: admiral,
      shipIndex: 1,
    });
  });
  test("gameboard won't place ship at invalid location", () => {
    const board = new GameBoard();
    const admiral = new Ship(2);
    let x = 1;
    let y = 9;
    board.placeShip(admiral, x, y);
    expect(board.getGameBoard()[9][1]).toEqual({
      shipName: undefined,
      shipIndex: undefined,
    });
  });
  test("gameBoard won't place ship if the space is occupied", () => {
    const board = new GameBoard();
    const admiral = new Ship(2);
    const catShip = new Ship(3);
    board.placeShip(admiral, 0, 0);
    board.placeShip(catShip, 0, 1);
    expect(board.getGameBoard()[1][0]).toEqual({
      shipName: admiral,
      shipIndex: 1,
    });
    expect(board.getGameBoard()[2][0]).toEqual({
      shipName: undefined,
      shipIndex: undefined,
    });
  });
  test("gameboard can receieve attack when there is a ship", () => {
    let board = new GameBoard();
    let admiral = new Ship(2);
    board.placeShip(admiral, 0, 0);
    board.receiveAttack(0, 1);
    expect(admiral.getShip()[1].hit).toBe(true);
  });
  test("gameboard keeps track of missed attacks", () => {
    let board = new GameBoard();
    let object = { x: 0, y: 0 };
    board.receiveAttack(0, 0);
    expect(board.getMissedAttacksArray()[0]).toEqual(object);
  });
  test("gameboard can check if every ship is sunk", () => {
    let board = new GameBoard();
    let admiral = new Ship(1);
    let cat = new Ship(1);
    board.placeShip(admiral, 0, 0);
    board.placeShip(cat, 3, 4);
    board.receiveAttack(0, 0);
    expect(board.checkIfAllShipSunk()).toBe(false);
  });
});

describe("player", () => {
  test("player should have name", () => {
    const player1 = new Player("John");
    expect(player1.getName()).toMatch("John");
  });
  test("player can change name", ()=>{
    const player1 = new Player("John");
    player1.setName("Kuzuha");
    expect(player1.getName()).toMatch("Kuzuha");
  });
  test("player ending turn starts enemy turn", () => {
    const player1 = new Player("John");
    const player2 = new Player("Kuzuha");
    player1.endTurn(player2);
    expect(player1.checkTurn()).toBe(false);
    expect(player2.checkTurn()).toBe(true);
  });
  test("player can attack board if they have turn", () => {
    const board2 = new GameBoard();
    const player1 = new Player("John");
    const player2 = new Player("Kuzuha");
    const admiral = new Ship(1);
    board2.placeShip(admiral, 0, 0);
    player1.attack(0, 0, player2, board2);
    expect(admiral.getShip()[0].hit).toBe(true);
  });
  test("player attacking ends turn and starts enemy turn", () => {
    const board = new GameBoard();
    const player1 = new Player("John");
    const player2 = new Player("Kuzuha");
    const admiral = new Ship(1);
    board.placeShip(admiral, 0, 0);
    player1.attack(0, 0, player2, board);
    expect(player1.checkTurn()).toBe(false);
    expect(player2.checkTurn()).toBe(true);
  });
});

describe("ai", () => {
  test("ai has name and starts with turn false", () => {
    const ai = new AI("ai");
    expect(ai.getName()).toMatch("ai");
    expect(ai.checkTurn()).toBe(false);
  });
  test("ai attacks when it has turn", () => {
    const board = new GameBoard();
    const board2 = new GameBoard();
    const player1 = new Player("John");
    const player2 = new AI("Kuzuha", player1, board);
    player1.attack(3, 4, player2, board2);
    player2.generateRandomAttack();
    expect(board.getMissedAttacksArray().length).toBe(1);
  });
  test("ai records all attacks and only attack when it has turn", () => {
    const board = new GameBoard();
    const board2 = new GameBoard();
    const player1 = new Player("John");
    const player2 = new AI("Kuzuha", player1, board);
    player1.attack(3, 4, player2, board2);
    player2.generateRandomAttack();
    player2.generateRandomAttack();
    expect(player2.getAttackArray().length).toBe(1);
  });
});
