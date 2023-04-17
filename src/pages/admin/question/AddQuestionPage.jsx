import React, { useState } from "react";
import { uid } from "uid";
import { app } from "../../../config";
import { useNavigate } from "react-router-dom";
import { set, ref, getDatabase } from "firebase/database";

const db = getDatabase(app);

const AddQuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [answer, setAnswer] = useState("");
  let navigate = useNavigate();

  const AddQuestion = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/question/${uuid}`), {
      question,
      optionOne,
      optionTwo,
      answer,
    });
    navigate("../data-question");
  };
  return (
    <>
      <form onSubmit={AddQuestion}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="" className="label__input">
              Soal
            </label>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="" className="label__input">
              Pilihan Jawaban 1
            </label>
            <input
              value={optionOne}
              onChange={(e) => setOptionOne(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="" className="label__input">
              Pilihan Jawaban 2
            </label>
            <input
              value={optionTwo}
              onChange={(e) => setOptionTwo(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="" className="label__input">
              Jawaban
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setAnswer(e.target.value)}
              className="input"
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
        </div>
        <button type="submit" className="button__primary mt-6 w-full">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddQuestionPage;
