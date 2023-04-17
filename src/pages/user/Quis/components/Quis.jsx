import "../../../../index.css";
import { Questions } from "../../../../utils/Questions";
import { useState } from "react";
import { uid } from "uid";
import { app } from "../../../../config";
import { useNavigate } from "react-router-dom";
import { set, ref, getDatabase } from "firebase/database";
import { useContext } from "react";
import { GameStateContext } from "../../../../utils/Contexts";

const db = getDatabase(app);
const Quis = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState, name, age, gender } =
    useContext(GameStateContext);

  const addResult = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/result/${uuid}`), {
      name,
      age,
      score,
      gender,
    });
  };

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = (event) => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    addResult(event);
    setGameState("finished");
  };

  return (
    <div className="p-4">
      <h1 className="font-semibold">{Questions[currentQuestion].prompt}</h1>
      <div className="flex flex-col space-y-2 p-2">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
          className="bg-red-500 text-justify p-2"
        >
          A. {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
          className="bg-red-500 text-justify p-2"
        >
          B. {Questions[currentQuestion].optionB}
        </button>
      </div>

      <div className="flex justify-center items-center">
        {currentQuestion === Questions.length - 1 ? (
          <button onClick={(e) => finishQuiz(e)} id="nextQuestion">
            Finish Quiz
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            id="nextQuestion"
            className="button__secondary"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quis;
