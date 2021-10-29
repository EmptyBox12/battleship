import { Ship } from "./ship.js";
import {GameBoard} from "./gameBoard.js";
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
