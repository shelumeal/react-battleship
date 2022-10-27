import React from "react";
import "./GameBoard.scss";
import useGame from "../../store/GameContext";
import StartGameButton from "../StartGameButton/StartGameButton";
import { masterData } from "../../utils/masterData";
import { createGameBoard, makeClone } from "../../utils/buildGameBoard";
import GameCell from "../GameCell/GameCell";

function GameBoard() {
  const { state, start, hit, miss } = useGame();

  const onStarButtonClick = () => {
    let newState = state;

    let newWarShips = JSON.parse(JSON.stringify(masterData)); // Clone masterdata
    let newGameBoard = createGameBoard();

    newState.warShips = newWarShips;
    newState.hits = 0;
    newState.shots = 0;
    newState.gameBoard = newGameBoard;

    // Dispatch action
    start(newState);
  };

  const onCellClick = (x, y, cellState) => {
    console.log("called onCellClick");
    if (cellState !== "miss" && cellState !== "hitted") {
      let newGameBoard = makeClone(state.gameBoard);
      let shot = state.shots + 1;
      let hits = state.hits;
      let newWarShips = [...state.warShips];
      let cellValue = state.gameBoard[x][y];
      if (cellValue >= 100) {
        switch (cellValue) {
          case 100:
            newWarShips[0].hits = newWarShips[0].hits + 1;
            break;
          case 200:
            newWarShips[1].hits = newWarShips[1].hits + 1;
            break;
          case 300:
            newWarShips[2].hits = newWarShips[2].hits + 1;
            break;
          case 400:
            newWarShips[3].hits = newWarShips[3].hits + 1;
            break;
          case 500:
            newWarShips[4].hits = newWarShips[4].hits + 1;
            break;
        }
        newGameBoard[x][y] = "hitted";
        hits += 1;

        let newState = state;
        newState.gameBoard = newGameBoard;
        newState.hits = hits;
        newState.shots = shot;
        newState.gameBoard = newGameBoard;
        newState.warShips = newWarShips;

        // Dispatch action
        hit(newState);
      } else {
        newGameBoard[x][y] = "miss";

        let newState = state;
        newState.gameBoard = newGameBoard;
        newState.shots = shot;

        // Dispatch action
        miss(newState);
      }
    }
  };

  return (
    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 game-board">
      {!state.gameBoard && (
        <table
          className={`empty-game-board ${
            state.screenType === "tablet" && "centered"
          }`}
        >
          <tbody>
            <tr>
              <td className="empty-game-board">
                <StartGameButton onClick={onStarButtonClick} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {state.gameBoard && state.hits < 17 && (
        <table
          className={`game-board-table ${
            state.screenType === "tablet" && "centered"
          }`}
        >
          <tbody>
            {state.gameBoard.map((row, x) => {
              return (
                <tr key={x}>
                  {row.map((column, y) => {
                    return (
                      <td key={y} className="tableCell">
                        <GameCell
                          onCellClick={() => onCellClick(x, y)}
                          x={x}
                          y={y}
                          cellState={column}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default GameBoard;
