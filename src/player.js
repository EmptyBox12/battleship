export class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }
  getName() {
    return this.name;
  }
  endTurn(player2) {
    if (this.turn == true) {
      this.turn = false;
      player2.startTurn();
    }
  }
  startTurn() {
    if(this.turn == false){
      this.turn = true;
    }
  }
  checkTurn() {
    return this.turn;
  }
  attack(enemyBoard, x, y, enemyPlayer) {
    if (this.checkTurn()) {
      enemyBoard.receiveAttack(x, y);
      this.endTurn(enemyPlayer);
    }
  }
}
