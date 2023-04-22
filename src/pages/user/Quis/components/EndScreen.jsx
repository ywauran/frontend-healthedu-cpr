import React from "react";
import "../../../../index.css";
import { useContext } from "react";
import { GameStateContext } from "../../../../utils/Contexts";
import { Questions } from "../../../../utils/Questions";
import { useNavigate } from "react-router-dom";

const EndScreen = () => {
  const { score, setScore, setGameState, name, age, gender } =
    useContext(GameStateContext);
  let navigate = useNavigate();

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center shadow-lg p-4">
      <h2 className="font-semibold">Quiz Finished</h2>
      <h3 className="font-medium">{name}</h3>
      <p>
        {score} / {Questions.length}
      </p>
      <button onClick={restartQuiz} className="button__third">
        Kembali Ke Halaman Utama
      </button>
    </div>
  );
};

export default EndScreen;
