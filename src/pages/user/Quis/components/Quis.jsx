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

  const prevQuestion = () => {
    setScore(score - 1);
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = (event) => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    addResult(event);
    setGameState("finished");
  };

  return (
    <div className="p-4 w-full shadow">
      <h1 className="font-semibold text-center">
        {Questions[currentQuestion].prompt}
      </h1>
      {Questions[currentQuestion].image !== null ? (
        <>
          <div
            className={`grid place-content-center ${
              Questions[currentQuestion].image.length > 1
                ? "grid-cols-3"
                : "grid-cols-1"
            } place-items-center gap-4`}
          >
            {Questions[currentQuestion].image !== null
              ? Questions[currentQuestion].image.map((item) => (
                  <img src={item} alt="" className="w-[100px]  shadow p-1" />
                ))
              : null}
          </div>
        </>
      ) : null}
      <div className="flex flex-col space-y-2 p-2">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
          className="button__warn text-justify"
        >
          A. {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
          className="button__warn text-justify"
        >
          B. {Questions[currentQuestion].optionB}
        </button>
      </div>

      <div className="flex justify-center items-center">
        {currentQuestion === Questions.length - 1 ? (
          <button
            onClick={(e) => finishQuiz(e)}
            id="nextQuestion"
            className="button__primary"
          >
            Selesai
          </button>
        ) : (
          <div>
            {currentQuestion === 0 ? null : (
              <>
                <button
                  onClick={prevQuestion}
                  id="nextQuestion"
                  className="button__secondary"
                >
                  Sebelumnya
                </button>
              </>
            )}
            <button
              onClick={nextQuestion}
              id="nextQuestion"
              className="button__primary"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quis;
