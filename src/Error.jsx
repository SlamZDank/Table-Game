/* eslint-disable react/prop-types */
function Error(props) {
  return (
    <>
      <div className="error-container">
        <h4 style={{ color: "red", fontSize: "24px" }}>
          <b>Error!</b>
        </h4>
        <ul>
          {props.cond1 ? (
            <li>
              <p>
                The dimension of the board must be{" "}
                <b style={{ color: "red" }}>7 or higher!</b>
              </p>
            </li>
          ) : (
            <></>
          )}
          {props.cond2 ? (
            <li>
              <p>
                The Player name must not be{" "}
                <b style={{ color: "red" }}>empty!</b>
              </p>
            </li>
          ) : (
            <></>
          )}
          {props.cond3 ? (
            <li>
              <p>
                All players must have{" "}
                <b style={{ color: "red" }}>different names!</b>
              </p>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
}

export default Error;
