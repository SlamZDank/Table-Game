import Player from "./Player";
import TableGen from "./TableGen";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x, y;

// let player = -1;

function GenBoard() {
  let [playerOne, setPlayerOne] = useState({
    x_axis: 0,
    y_axis: 0,
  });

  let [playerTwo, setPlayerTwo] = useState({
    x_axis: 0,
    y_axis: 0,
  });

  console.log(useParams());
  let { dimension, playerOneName, playerTwoName } = useParams();

  // Default Params when the game is accessed using the /Game route
  if (!dimension && !playerOneName && !playerTwoName) {
    dimension = 7;
    playerOneName = "Guest 1";
    playerTwoName = "Guest 2";
  }

  playerOne.name = playerOneName;
  playerTwo.name = playerTwoName;

  document.title = `🔴${playerOne.name} vs 🔵${playerOne.name}: Table Game`;

  let [player, setPlayer] = useState(-1);

  let [playerOneWon, setPlayerOneWon] = useState(false);
  let [playerTwoWon, setPlayerTwoWon] = useState(false);

  let [diceX, setDiceX] = useState(0);
  let [diceY, setDiceY] = useState(0);

  const rollTheDice = () => {
    setDiceX(getRandomInteger(-(dimension - 1), +(dimension - 1)));
    setDiceY(getRandomInteger(-(dimension - 1), +(dimension - 1)));
    console.log(diceX);
    console.log(diceY);
    switch (player) {
      case -1:
        setPlayer(() => player * -1);
        x = playerOne.x_axis + diceX;
        y = playerOne.y_axis + diceY;
        if (x < 0 || y < 0) return;
        if (x > dimension - 1 || y > dimension - 1) return;
        setPlayerOne({ ...playerOne, x_axis: x, y_axis: y });

        if (
          playerOne.x_axis == dimension - 1 &&
          playerOne.y_axis == dimension - 1
        ) {
          setPlayerOneWon(() => true);
          return;
        }
        break;

      case 1:
        setPlayer(() => player * -1);
        x = playerTwo.x_axis + diceX;
        y = playerTwo.y_axis + diceY;
        if (x < 0 || y < 0) return;
        if (x > dimension - 1 || y > dimension - 1) return;
        setPlayerTwo({ ...playerTwo, x_axis: x, y_axis: y });
        if (
          playerTwo.x_axis == dimension - 1 &&
          playerTwo.y_axis == dimension - 1
        ) {
          setPlayerTwoWon(() => true);
          return;
        }
        break;
    }
  };

  return (
    <>
      <TableGen
        dimension={+dimension}
        playerOne={playerOne}
        playerTwo={playerTwo}
      />
      <br />
      <div className="player-table">
        <Player
          isActive={player}
          id="X"
          name={playerOne.name}
          hasOneWon={playerOneWon}
          dice={String(diceY) + ", " + String(diceX)}
          pull={String(playerOne.y_axis) + ", " + String(playerOne.x_axis)}
        ></Player>
        <Player
          isActive={player}
          id="O"
          name={playerTwo.name}
          hasTwoWon={playerTwoWon}
          dice={String(diceY) + ", " + String(diceX)}
          pull={String(playerTwo.y_axis) + ", " + String(playerTwo.x_axis)}
        ></Player>
      </div>
      <br />
      <div className="game-options">
        <button
          id="dice-button"
          onClick={() => {
            if (
              !(
                (playerTwo.x_axis == dimension - 1 &&
                  playerTwo.y_axis == dimension - 1) ||
                (playerOne.x_axis == dimension - 1 &&
                  playerOne.y_axis == dimension - 1)
              )
            ) {
              rollTheDice();
            }
          }}
        >
          🎲
        </button>
        <Link to="/">
          <button id="restart-button">♻️</button>
        </Link>
      </div>
    </>
  );
}

export default GenBoard;
