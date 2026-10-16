/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate, useParams, Navigate } from "react-router-dom";

function Quiz() {
  const { cert, level } = useParams();
  const navigate = useNavigate();

  const { questions, currentQuestion, setCurrentQuestion } = useQuizContext();

  const [isNextButton, setIsNextButton] = useState(false);
  const [isResultButton, setIsResultButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();     // single-answer mode
  const [selectedIndexes, setSelectedIndexes] = useState([]); // multi-answer mode
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [time, setTime] = useState(120);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const levelQuestions = questions[cert] && questions[cert][level];

  // Unknown certification/level combo (bad link, missing data, etc.):
  // redirect instead of crashing on `undefined[currentQuestion]`.
  if (!levelQuestions || levelQuestions.length === 0) {
    return <Navigate to="/error" replace />;
  }

  const currentQ = levelQuestions[currentQuestion];
  const isMultiple = currentQ.type === "multiple";

  const selectAnswer = (index) => {
    if (isMultiple) {
      let updated;
      if (selectedIndexes.includes(index)) {
        updated = selectedIndexes.filter((i) => i !== index);
      } else {
        if (selectedIndexes.length >= currentQ.selectCount) return;
        updated = [...selectedIndexes, index];
      }
      setSelectedIndexes(updated);

      const reachedCount = updated.length === currentQ.selectCount;
      if (currentQuestion === levelQuestions.length - 1) {
        setIsNextButton(false);
        setIsResultButton(reachedCount);
      } else {
        setIsNextButton(reachedCount);
      }
    } else {
      if (currentQuestion === levelQuestions.length - 1) {
        setIsNextButton(false);
        setIsResultButton(true);
      } else {
        setIsNextButton(true);
      }
      setSelectedIndex(index);
    }
  };

  const nextQuestion = (indexOrIndexes) => {
    if (currentQuestion >= levelQuestions.length - 1) {
      addAnswer(indexOrIndexes);
      setCurrentQuestion(0);
      setIsResult(true);
    } else {
      setTime(120);
      setIsNextButton(false);
      addAnswer(indexOrIndexes);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedIndex();
      setSelectedIndexes([]);
    }
  };

  const addAnswer = (indexOrIndexes) => {
    const q = levelQuestions[currentQuestion];
    let selectedAnswer;

    if (q.type === "multiple") {
      if (indexOrIndexes === null || indexOrIndexes.length === 0) {
        selectedAnswer = {
          answer: "Time's up",
          trueAnswer: false,
          isMultiple: true,
        };
      } else {
        const chosen = indexOrIndexes.map((i) => q.answers[i]);
        const correctIndexes = q.answers
          .map((a, i) => (a.trueAnswer ? i : null))
          .filter((i) => i !== null);

        const isFullyCorrect =
          indexOrIndexes.length === correctIndexes.length &&
          correctIndexes.every((i) => indexOrIndexes.includes(i));

        selectedAnswer = {
          answer: chosen.map((c) => c.answer).join(", "),
          trueAnswer: isFullyCorrect,
          isMultiple: true,
        };
      }
    } else {
      selectedAnswer =
        indexOrIndexes !== null && indexOrIndexes !== undefined
          ? q.answers[indexOrIndexes]
          : { answer: "Time's up", trueAnswer: false };
    }

    const newAnswers = [...selectedAnswers, selectedAnswer];
    setSelectedAnswers(newAnswers);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsErrorMessage(time <= 5 && time >= 0);
    if (time < 0) {
      nextQuestion(isMultiple ? selectedIndexes : selectedIndex ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  // Side-effecting navigation belongs in an effect, not in the render path.
  useEffect(() => {
    if (isResult) {
      navigate("/result", {
        state: {
          answers: selectedAnswers,
          questions: levelQuestions,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResult]);

  if (isResult) return null;

  return (
    <div>
      <div className="progress-box">
        <div className="progress-top">
          <div className="progress-texts">
            <h2 className="progress-title">Quiz Progress</h2>
            <p className="progress-description">
              You are solving the {level} question set
            </p>
          </div>
          <div className="progress-icon">
            <i className="bi bi-bar-chart"></i>
          </div>
        </div>
        <div className="progress-bottom">
          <div
            className="progress-circle"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              "--value": ((currentQuestion + 1) / levelQuestions.length) * 100,
            }}
          >
            <span className="progress-big">{currentQuestion + 1}</span>
            <span className="progress-mini">/{levelQuestions.length}</span>
          </div>
          <p className="progress-detail">
            You solve the {currentQuestion + 1}. question out of a total of{" "}
            {levelQuestions.length} questions
          </p>
        </div>
      </div>
      <div className="question-box">
        <div className="question-text">
          <h2 className="question-title">Question: {currentQuestion + 1}</h2>
          <h3 className="question">{currentQ.question}</h3>
          {isMultiple && (
            <p className="question-hint">
              Select {currentQ.selectCount} correct answers
            </p>
          )}
        </div>
        <div
          className="progress-circle time"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ "--value": (time / 120) * 100 }}
        >
          <span className="time">{time}</span>
        </div>
      </div>

      <div className="answers-boxes">
        {currentQ.answers.map((answer, index) => {
          const selected = isMultiple
            ? selectedIndexes.includes(index)
            : selectedIndex === index;
          return (
            <label
              key={index}
              htmlFor={`answer-${index}`}
              className={selected ? "answer-label selected" : "answer-label"}
            >
              {answer.answer}
              <input
                type={isMultiple ? "checkbox" : "radio"}
                name="answer"
                id={`answer-${index}`}
                checked={selected}
                onChange={() => selectAnswer(index)}
              />
            </label>
          );
        })}
      </div>

      {isNextButton ? (
        <div className="next">
          <button
            onClick={() =>
              nextQuestion(isMultiple ? selectedIndexes : selectedIndex)
            }
            type="button"
            className="next-btn"
          >
            Next Question
            <div className="icon">
              <i className="bi bi-arrow-right"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isResultButton ? (
        <div className="next">
          <button
            onClick={() =>
              nextQuestion(isMultiple ? selectedIndexes : selectedIndex)
            }
            type="button"
            className="next-btn result-btn"
          >
            See Results
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isErrorMessage ? (
        <div className="message animation">
          <div className="icon">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <span>You must hurry up!</span>
        </div>
      ) : null}
    </div>
  );
}

export default Quiz;