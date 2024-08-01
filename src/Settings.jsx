import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error.jsx";

let url = "/Game";

function Settings() {
  document.title = "Settings: Table Game";
  // the default value for dimension
  let [isLegal, setIsLegal] = useState(false);
  let [dimension, setDimension] = useState(7);
  let [playerOneName, setPlayerOneName] = useState("Guest 1");
  let [playerTwoName, setPlayerTwoName] = useState("Guest 2");

  const handleDimensionChange = (event) => {
    setDimension(() => event.target.value);
  };

  const handlePlayerOneNameChange = (event) => {
    setPlayerOneName(() => event.target.value);
  };

  const handlePlayerTwoNameChange = (event) => {
    setPlayerTwoName(() => event.target.value);
  };

  // add condition checking
  useEffect(() => {
    setIsLegal(
      dimension >= 7 &&
        playerOneName !== "" &&
        playerTwoName !== "" &&
        playerOneName !== playerTwoName
    );
    url = `/Game/${dimension}/${playerOneName}/${playerTwoName}`;
  }, [dimension, playerOneName, playerTwoName]);

  return (
    <>
      <div className="settings-container">
        <label htmlFor="table-dimension">Dimension: </label>
        <input
          type="number"
          name="table-dimension"
          value={dimension}
          id="table-dimension"
          onChange={handleDimensionChange}
        />
        <label htmlFor="player-one-name">Player 🔴: </label>
        <input
          id="player-one-name"
          type="text"
          value={playerOneName}
          placeholder="Guest 1"
          onChange={handlePlayerOneNameChange}
        />
        <label htmlFor="player-two-name">Player 🔵: </label>
        <input
          id="player-two-name"
          type="text"
          value={playerTwoName}
          placeholder="Guest 2"
          onChange={handlePlayerTwoNameChange}
        />
      </div>
      <br />
      {isLegal ? (
        <Link to={url}>
          <button>🎮</button>
        </Link>
      ) : (
        <Error
          cond1={dimension < 7}
          cond2={playerOneName === "" || playerTwoName === ""}
          cond3={
            playerOneName.trim() === playerTwoName.trim() &&
            playerOneName !== ""
          }
        />
      )}
    </>
  );
}

export default Settings;
