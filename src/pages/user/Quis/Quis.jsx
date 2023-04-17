import "../../../index.css";
import Menu from "./components/Menu";
import QuisComponents from "./components/Quis";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "../../../utils/Contexts";
import { useParams } from "react-router-dom";

const Quis = () => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const { name, age, gender } = useParams();

  return (
    <div className="grid place-content-center place-items-center">
      <h1 className="font-bold">Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          name,
          age,
          gender,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <QuisComponents />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
};

export default Quis;
