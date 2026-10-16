import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

function Home() {
  const { cert } = useParams();
  const { questions, certifications } = useQuizContext();

  const certMeta = certifications.find((c) => c.id === cert);
  const certQuestions = questions[cert];
  const quizKeys = certQuestions ? Object.keys(certQuestions) : [];

  // Lazy initializer: runs once when Home mounts, so the Link's `to`
  // stays stable across re-renders. A new quiz is drawn each time the
  // user comes back to this screen (the component remounts).
  const [quizKey] = useState(() =>
    quizKeys.length ? pickRandom(quizKeys) : null
  );

  // Unknown certification id, or one with no question bank yet
  // (e.g. someone lands on /home/developer directly): bounce to Error.
  if (!certMeta || !quizKey) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">{certMeta.name}</h1>
          <p className="intro-description">
            Answer the questions and check your score at the end
          </p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-question-circle"></i>
        </div>
      </div>

      <div className="level-boxes">
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Quiz</h2>
            <span>{quizKeys.length} sets available</span>
          </div>
          <Link className="level-link" to={`/quiz/${cert}/${quizKey}`}>
            <span>Start quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>

      <Link className="cert-back-link" to="/">
        <i className="bi bi-arrow-left"></i> <span>Change certification</span>
      </Link>
    </div>
  );
}

export default Home;