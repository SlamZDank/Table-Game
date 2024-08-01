/* eslint-disable react/prop-types */
function TableGen(
  props = {
    dimension: 5,
    playerOne: {
      x_axis: 0,
      y_axis: 0,
    },
    playerTwo: {
      x_axis: 0,
      y_axis: 0,
    },
  }
) {
  const dimension = props.dimension;
  const pOne = props.playerOne;
  const pTwo = props.playerTwo;
  let table = Array(dimension)
    .fill("")
    .map(() => Array(dimension).fill(""));

  if (pOne["x_axis"] === pTwo["x_axis"] && pOne["y_axis"] === pTwo["y_axis"]) {
    table[table[0].length - (pOne.x_axis + 1)][pOne.y_axis] = "🔴🔵";
  } else {
    table[table[0].length - (pOne.x_axis + 1)][pOne.y_axis] = "🔴";
    table[table[0].length - (pTwo.x_axis + 1)][pTwo.y_axis] = "🔵";
  }

  // Starting square
  if (table[table[0].length - 1][0] === "")
    table[table[0].length - 1][0] = "🏁";
  // ugly solution but ok
  else if (table[table[0].length - 1][0] === "🔴")
    table[table[0].length - 1][0] = "🏁🔴";
  else if (table[table[0].length - 1][0] === "🔵")
    table[table[0].length - 1][0] = "🏁🔵";
  else table[table[0].length - 1][0] = "🏁🔴🔵";

  // Winning square
  if (table[0][table[0].length - 1] === "")
    table[0][table[0].length - 1] = "🏆";
  else if (table[0][table[0].length - 1] === "🔴")
    table[0][table[0].length - 1] = "🏆🔴";
  else if (table[0][table[0].length - 1] === "🔵")
    table[0][table[0].length - 1] = "🏆🔵";

  console.log(table);
  return (
    <>
      <div className="container">
        <div className="matrix">
          {table.map((row, rowIndex) => (
            <div key={rowIndex} className="matrix-row">
              {row.map((col, colIndex) => (
                <span key={colIndex} className="matrix-cell">
                  {col}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TableGen;
