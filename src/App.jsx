import "./App.css";
import GamePage from "./GamePage.jsx";
import Settings from "./Settings.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/Game" element={<GamePage />} />
          <Route
            path="/Game/:dimension/:playerOneName/:playerTwoName"
            element={<GamePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

// mohamedbhy github


export default App;
