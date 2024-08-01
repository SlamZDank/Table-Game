/* eslint-disable react/prop-types */
function Player(props) {
  if ((props.isActive === -1 && props.id == "X") || props.hasOneWon) {
    console.log("PlayerOne: " + String(props.hasOneWon));
    return (
      <>
        <p>🔴 {props.name}</p>
        <p>🎲 {props.dice}</p>
        {props.hasWon ? (
          <p style={{ color: "green" }}>You Win!</p>
        ) : (
          <p>📍{props.pull}</p>
        )}
      </>
    );
  }
  if ((props.isActive === 1 && props.id == "O") || props.hasTwoWon) {
    console.log("PlayerTwo: " + String(props.hasTwoWon));
    return (
      <>
        <p>🔵 {props.name}</p>
        <p>🎲 {props.dice}</p>
        {props.hasWon ? (
          <p style={{ color: "green" }}>You Win!</p>
        ) : (
          <p>📍{props.pull}</p>
        )}
      </>
    );
  }
  return <></>;
}

export default Player;
