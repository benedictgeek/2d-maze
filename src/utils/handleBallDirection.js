import { useEffect, useState } from "react";
import { useGameContext } from "../state/gameContext";
import { generateCoinCoord } from "./generate-coord";
import { maze } from "./generate-maze-coord";

const { max, min } = Math;

export let useMazeCoord = () => {
  let {
    state,
    moveBallDispatch,
    movesDispatch,
    setCoinDispatch,
    setCoinsCountDispatch,
  } = useGameContext();
  let { ballXY, moves, coins, inProgress } = state;
  let currentMoves = moves;
  ++currentMoves;
  let getNewBallCoord = (key) => {
    if (inProgress) {
      let newCoord = { ...ballXY };
      const cell = maze[ballXY.y][ballXY.x];
      if (key === "ArrowLeft" && !cell.left)
        newCoord = { ...ballXY, x: max(0, --ballXY.x) };
      else if (key === "ArrowUp" && !cell.top)
        newCoord = { ...ballXY, y: max(0, --ballXY.y) };
      else if (key === "ArrowRight" && !cell.right && !cell.isExit)
        newCoord = { ...ballXY, x: min(maze.length, ++ballXY.x) };
      else if (key === "ArrowDown" && !cell.bottom)
        newCoord = { ...ballXY, y: min(maze.length, ++ballXY.y) };
      else {
        --currentMoves;
      }
      movesDispatch(currentMoves);
      moveBallDispatch(newCoord);
    }
  };

  let getNewCoinCoord = () => {
    let newCoord = generateCoinCoord(ballXY);
    setCoinsCountDispatch(++coins);
    setCoinDispatch(newCoord);
  };

  return { getNewBallCoord, getNewCoinCoord };
};

export let useBomb = () => {
  let { state, setBombDispatch } = useGameContext();
  let { ballXY, bombXY, inProgress } = state;
  let pathTimer;
  let timer;
  useEffect(() => {
    if (inProgress) {
      timer = setInterval(() => {
        clearInterval(pathTimer);
        let newCoord = generateCoinCoord(ballXY);
        setBombDispatch(newCoord);
        handleBombMovement(newCoord);
      }, 3000);
    } else {
      clearInterval(timer);
      clearInterval(pathTimer);
    }
    return () => {
      clearInterval(timer);
      clearInterval(pathTimer);
    };
  }, [inProgress]);

  let handleBombMovement = (startingCell) => {
    //I am detecting the path of the bomb from it's first apperance
    let bombInitiatorCell = maze[startingCell.y][startingCell.x];
    let isHorizontal =
      bombInitiatorCell.left == false || bombInitiatorCell.right == false;
    // return console.log("Starting - CEll", bombInitiatorCell, isHorizontal);

    let newBombCell = { ...bombInitiatorCell };
    pathTimer = setInterval(() => {
      try {
        let currentBombCell = maze[newBombCell.y][newBombCell.x];
        //these moves the bomb sideways or vertically in a path
        if (isHorizontal && !currentBombCell.left) {
          newBombCell = {
            ...currentBombCell,
            x: max(0, currentBombCell.x - 1),
          };
        } else if (
          isHorizontal &&
          !currentBombCell.right &&
          !currentBombCell.isExit
        ) {
          newBombCell = { ...currentBombCell, x: currentBombCell.x + 1 };
        } else if (
          !isHorizontal &&
          !currentBombCell.top &&
          !currentBombCell.isEntry
        ) {
          newBombCell = { ...currentBombCell, y: currentBombCell.y - 1 };
        } else if (!isHorizontal && !currentBombCell.bottom) {
          newBombCell = { ...currentBombCell, y: currentBombCell.y + 1 };
        }

        //bomb should not meet ball but ball running into bomb
        if (!(newBombCell.x == ballXY.x && newBombCell.y == ballXY.y)) {
          setBombDispatch(newBombCell);
        }
      } catch (error) {
        console.log("ERRROR FROM 1", error);
      }
    }, 1000);
  };
};
