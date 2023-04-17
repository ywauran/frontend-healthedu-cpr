import "../../../../index.css";
import { useContext } from "react";
import { GameStateContext } from "../../../../utils/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="">
      <button
        onClick={() => {
          setGameState("playing");
        }}
        className="button__primary"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
