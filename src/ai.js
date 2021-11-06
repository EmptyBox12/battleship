import {Player} from "./player.js";

export class AI extends Player{
  constructor(name, enemyPlayer, enemyBoard){
    super(name,enemyBoard);
    this.turn = false;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.attackArray = [];
  }
  generateRandomAttack(){
    if(this.checkTurn()){
      let numberObject = {x:undefined, y: undefined};
      while(true){
        let firstNumber = Math.floor((Math.random() * 10));
        let secondNumber = Math.floor((Math.random() * 10));
        numberObject.x = firstNumber;
        numberObject.y = secondNumber;
        if(!(this.attackArray.some(e => e.x == numberObject.x && e.y == numberObject.y))){
          this.attackArray.push(numberObject);
          this.attack(numberObject.x,numberObject.y,this.enemyPlayer, this.enemyBoard);
          break;
        }
      }
    }
  }
  getAttackArray(){
    return this.attackArray;
  }
}