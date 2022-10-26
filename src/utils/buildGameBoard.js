import { masterData } from "../utils/masterData";

export const createGameBoard = () => {
  let gameBoard = [10];
  for (let i = 0; i < 10; i++) {
    gameBoard[i] = [10];
    for (let j = 0; j < 10; j++) {
      gameBoard[i][j] = null;
    }
  }
  for (let i = 0; i < masterData.length; i++) {
    gameBoard = generateShipPositions(masterData[i], gameBoard);
  }
  return gameBoard;
};

const generateShipPositions = (ship, gameBoard) => {
  let shipStartPosition = null;
  let continueLoop = true;
  while (continueLoop) {
    shipStartPosition = getRandomCoordinate();
    if (positionIsFree(gameBoard, shipStartPosition)) {
      let x = shipStartPosition[0];
      let y = shipStartPosition[1];
      let directions = getDirections();
      gameBoard[x][y] = ship.id * 100;
      gameBoard = refillNeighbourCells(gameBoard, x, y, ship.id);

      for (let i = 0; i < directions.length; i++) {
        let tempGameBoard = makeClone(gameBoard);
        let newGameBoard = tryDirections(
          directions[i],
          ship,
          shipStartPosition,
          tempGameBoard
        );
        if (newGameBoard !== null) {
          continueLoop = false;
          gameBoard = [...newGameBoard];
          break;
        } else {
          tempGameBoard = newGameBoard = null;
        }
      }
    }
  }
  return gameBoard;
};

const getRandomCoordinate = () => {
  const max = 9;
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)];
};

const positionIsFree = (gameBoard, position) => {
  let x = position[0];
  let y = position[1];
  return !(gameBoard[x][y] > 0);
};

const getDirections = () => {
  let directions = [];
  for (let i = 0; directions.length < 4; i++) {
    let number = getRandomNumber(4);
    if (directions.indexOf(number) === -1) {
      directions.push(number);
    }
  }
  return directions;
};

const refillNeighbourCells = (gameBoard, x, y, shipId) => {
  if (y < 9 && gameBoard[x][y + 1] === null) {
    gameBoard[x][y + 1] = shipId;
  }
  if (x < 9 && y < 9 && gameBoard[x + 1][y + 1] === null) {
    gameBoard[x + 1][y + 1] = shipId;
  }
  if (x < 9 && gameBoard[x + 1][y] === null) {
    gameBoard[x + 1][y] = shipId;
  }
  if (x < 9 && y > 0 && gameBoard[x + 1][y - 1] === null) {
    gameBoard[x + 1][y - 1] = shipId;
  }
  if (y > 0 && gameBoard[x][y - 1] === null) {
    gameBoard[x][y - 1] = shipId;
  }
  if (x > 0 && y > 0 && gameBoard[x - 1][y - 1] === null) {
    gameBoard[x - 1][y - 1] = shipId;
  }
  if (x > 0 && gameBoard[x - 1][y] === null) {
    gameBoard[x - 1][y] = shipId;
  }
  if (x > 0 && y < 9 && gameBoard[x - 1][y + 1] === null) {
    gameBoard[x - 1][y + 1] = shipId;
  }
  return gameBoard;
};

export const makeClone = (gameBoard) => {
  let clone = [10];
  for (let i = 0; i < 10; i++) {
    clone[i] = [10];
    for (let j = 0; j < 10; j++) {
      clone[i][j] = gameBoard[i][j];
    }
  }
  return clone;
};

function tryDirections(direction, ship, shipStartPosition, gameBoard) {
  let x = shipStartPosition[0];
  let y = shipStartPosition[1];
  let wrongDirection = false;

  for (let i = 1; i < ship.size; i++) {
    switch (direction) {
      case 0:
        if (y + i > 9) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(gameBoard, [x, y + i]) ||
          gameBoard[x][y + i] === ship.id
        ) {
          gameBoard[x][y + i] = ship.id * 100;
          refillNeighbourCells(gameBoard, x, y + i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 1:
        if (x + i > 9) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(gameBoard, [x + i, y]) ||
          gameBoard[x + i][y] === ship.id
        ) {
          gameBoard[x + i][y] = ship.id * 100;
          refillNeighbourCells(gameBoard, x + i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 2:
        if (y - i < 0) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(gameBoard, [x, y - i]) ||
          gameBoard[x][y - i] === ship.id
        ) {
          gameBoard[x][y - i] = ship.id * 100;
          refillNeighbourCells(gameBoard, x, y - i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 3:
        if (x - i < 0) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(gameBoard, [x - i, y]) ||
          gameBoard[x - i][y] === ship.id
        ) {
          gameBoard[x - i][y] = ship.id * 100;
          refillNeighbourCells(gameBoard, x - i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }

      default:
        break;
    }
  }
  if (wrongDirection) {
    return null;
  } else {
    return gameBoard;
  }
}

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
