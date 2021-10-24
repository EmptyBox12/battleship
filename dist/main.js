/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameBoard = /*#__PURE__*/function () {
  function GameBoard() {
    _classCallCheck(this, GameBoard);

    this.gameBoardArray = this.createGameBoard();
    this.missedAttacks = [];
  }

  _createClass(GameBoard, [{
    key: "createGameBoard",
    value: function createGameBoard() {
      var array = [];
      var arrayItem = [];

      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          arrayItem.push({
            shipName: undefined,
            shipIndex: undefined
          });
        }

        array.push(arrayItem);
        arrayItem = [];
      }

      return array;
    }
  }, {
    key: "getGameBoard",
    value: function getGameBoard() {
      return this.gameBoardArray;
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, x, y) {
      for (var i = 0; i < ship.getShipLength(); i++) {
        this.gameBoardArray[y + i][x].shipName = ship;
        this.gameBoardArray[y + i][x].shipIndex = i;
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      if (this.gameBoardArray[y][x].shipName == undefined) {
        this.missedAttacks.push({
          x: x,
          y: y
        });
      } else {
        this.gameBoardArray[y][x].shipName.hit(this.gameBoardArray[y][x].shipIndex);
      }
    }
  }, {
    key: "getMissedAttacksArray",
    value: function getMissedAttacksArray() {
      return this.missedAttacks;
    }
  }, {
    key: "checkIfAllShipSunk",
    value: function checkIfAllShipSunk() {
      this.gameBoardArray.forEach(function (item) {
        console.log(item);
        item.forEach(function (element) {
          console.log(element);
          console.log(element.shipName);

          if (element.shipName) {
            console.log("a");
            return false;
          }
        });
      });
      return true;
    }
  }]);

  return GameBoard;
}();

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);

    this.length = length;
    this.ship = this.createShip();
  }

  _createClass(Ship, [{
    key: "createShip",
    value: function createShip() {
      var shipArray = [];
      var i = this.length;

      while (i > 0) {
        shipArray.push({
          hit: false
        });
        i--;
      }

      return shipArray;
    }
  }, {
    key: "getShip",
    value: function getShip() {
      return this.ship;
    }
  }, {
    key: "getShipLength",
    value: function getShipLength() {
      return this.ship.length;
    }
  }, {
    key: "hit",
    value: function hit(index) {
      this.ship[index].hit = true;
    }
  }, {
    key: "checkHit",
    value: function checkHit(item) {
      if (item.hit == true) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.ship.every(this.checkHit)) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Ship;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");


var board = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
var admiral = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1);
board.placeShip(admiral, 0, 1);
console.log(board.getGameBoard());
board.checkIfAllShipSunk();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFwQ0g7O0FBQUE7QUFBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUk3QixvREFBSixFQUFkO0FBQ0EsSUFBTThCLE9BQU8sR0FBRyxJQUFJUiwwQ0FBSixDQUFTLENBQVQsQ0FBaEI7QUFFQU8sS0FBSyxDQUFDRSxTQUFOLENBQWdCRCxPQUFoQixFQUF5QixDQUF6QixFQUE0QixDQUE1QjtBQUNBWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsS0FBSyxDQUFDRyxZQUFOLEVBQVo7QUFDQUgsS0FBSyxDQUFDSSxrQkFBTixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nYW1lQm9hcmRBcnJheSA9IHRoaXMuY3JlYXRlR2FtZUJvYXJkKCk7XHJcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXTtcclxuICB9XHJcbiAgY3JlYXRlR2FtZUJvYXJkKCkge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBsZXQgYXJyYXlJdGVtID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgYXJyYXlJdGVtLnB1c2goeyBzaGlwTmFtZTogdW5kZWZpbmVkLCBzaGlwSW5kZXg6IHVuZGVmaW5lZCB9KTtcclxuICAgICAgfVxyXG4gICAgICBhcnJheS5wdXNoKGFycmF5SXRlbSk7XHJcbiAgICAgIGFycmF5SXRlbSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuICBnZXRHYW1lQm9hcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRBcnJheTtcclxuICB9XHJcbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZEFycmF5W3kgKyBpXVt4XS5zaGlwTmFtZSA9IHNoaXA7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeSArIGldW3hdLnNoaXBJbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcE5hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKHsgeDogeCwgeTogeSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcE5hbWUuaGl0KFxyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkQXJyYXlbeV1beF0uc2hpcEluZGV4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE1pc3NlZEF0dGFja3NBcnJheSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pc3NlZEF0dGFja3M7XHJcbiAgfVxyXG5cclxuICBjaGVja0lmQWxsU2hpcFN1bmsoKSB7XHJcbiAgICB0aGlzLmdhbWVCb2FyZEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuc2hpcE5hbWUpO1xyXG4gICAgICAgIGlmIChlbGVtZW50LnNoaXBOYW1lKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5zaGlwID0gdGhpcy5jcmVhdGVTaGlwKCk7XHJcbiAgfVxyXG4gIGNyZWF0ZVNoaXAoKSB7XHJcbiAgICBsZXQgc2hpcEFycmF5ID0gW107XHJcbiAgICBsZXQgaSA9IHRoaXMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGkgPiAwKSB7XHJcbiAgICAgIHNoaXBBcnJheS5wdXNoKHsgaGl0OiBmYWxzZSB9KTtcclxuICAgICAgaS0tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoaXBBcnJheTtcclxuICB9XHJcbiAgZ2V0U2hpcCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXA7XHJcbiAgfVxyXG4gIGdldFNoaXBMZW5ndGgoKXtcclxuICAgIHJldHVybiB0aGlzLnNoaXAubGVuZ3RoO1xyXG4gIH1cclxuICBoaXQoaW5kZXgpIHtcclxuICAgIHRoaXMuc2hpcFtpbmRleF0uaGl0ID0gdHJ1ZTtcclxuICB9XHJcbiAgY2hlY2tIaXQoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uaGl0ID09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlzU3VuaygpIHtcclxuICAgIGlmICh0aGlzLnNoaXAuZXZlcnkodGhpcy5jaGVja0hpdCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcclxuaW1wb3J0IHtHYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xyXG5cclxuY29uc3QgYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbmNvbnN0IGFkbWlyYWwgPSBuZXcgU2hpcCgxKTtcclxuXHJcbmJvYXJkLnBsYWNlU2hpcChhZG1pcmFsLCAwLCAxKTtcclxuY29uc29sZS5sb2coYm9hcmQuZ2V0R2FtZUJvYXJkKCkpO1xyXG5ib2FyZC5jaGVja0lmQWxsU2hpcFN1bmsoKTtcclxuIl0sIm5hbWVzIjpbIkdhbWVCb2FyZCIsImdhbWVCb2FyZEFycmF5IiwiY3JlYXRlR2FtZUJvYXJkIiwibWlzc2VkQXR0YWNrcyIsImFycmF5IiwiYXJyYXlJdGVtIiwiaSIsImoiLCJwdXNoIiwic2hpcE5hbWUiLCJ1bmRlZmluZWQiLCJzaGlwSW5kZXgiLCJzaGlwIiwieCIsInkiLCJnZXRTaGlwTGVuZ3RoIiwiaGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsIlNoaXAiLCJsZW5ndGgiLCJjcmVhdGVTaGlwIiwic2hpcEFycmF5IiwiaW5kZXgiLCJldmVyeSIsImNoZWNrSGl0IiwiYm9hcmQiLCJhZG1pcmFsIiwicGxhY2VTaGlwIiwiZ2V0R2FtZUJvYXJkIiwiY2hlY2tJZkFsbFNoaXBTdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==