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
    //might change array of arrays to array of objects for consistency
    if(this.checkTurn()){
      let numberArray = []
      while(true){
        let firstNumber = Math.floor((Math.random() * 10));
        let secondNumber = Math.floor((Math.random() * 10));
        numberArray = [firstNumber,secondNumber];
        if(!(this.attackArray.includes(numberArray))){
          this.attackArray.push(numberArray);
          break;
        }
      }
     this.attack(numberArray[0],numberArray[1],this.enemyPlayer, this.enemyBoard);
    }
  }
  getAttackArray(){
    return this.attackArray;
  }
}