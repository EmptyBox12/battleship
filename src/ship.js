export class Ship {
  constructor(length) {
    this.length = length;
    this.ship = this.createShip();
  }
  createShip() {
    let shipArray = [];
    let i = this.length;
    while (i > 0) {
      shipArray.push({ hit: false });
      i--;
    }
    return shipArray;
  }
  getShip() {
    return this.ship;
  }
  getShipLength(){
    return this.ship.length;
  }
  hit(index) {
    this.ship[index].hit = true;
  }
  checkHit(item) {
    if (item.hit == true) {
      return true;
    } else {
      return false;
    }
  }
  isSunk() {
    if (this.ship.every(this.checkHit)) {
      return true;
    } else {
      return false;
    }
  }
}
