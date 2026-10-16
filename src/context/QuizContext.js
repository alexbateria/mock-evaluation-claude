import React, { createContext, useContext, useState } from "react";
import examQuestionsA1 from "./associated-fundations/examQuestionsBankA1";
import examQuestionsA2 from "./associated-fundations/examQuestionsBankA2";
import examQuestionsA3 from "./associated-fundations/examQuestionsBankA3";
import examQuestionsA4 from "./developer-fundations/examQuestionsBankD1";

const QuizContext = createContext();

const certifications = [
  {
    id: "associate",
    name: "Claude Associate Foundations",
    description: "Prompting, evaluation, product selection and responsible use.",
    available: true,
  },
  {
    id: "developer",
    name: "Claude Developer Foundations",
    description: "API integration, tool use and application development.",
    available: true,
  },
  {
    id: "architect",
    name: "Claude Architect Foundations",
    description: "Solution architecture and enterprise deployment patterns.",
    available: false,
  },
];

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = {
    associate: {
      A1: examQuestionsA1,
      A2: examQuestionsA2,
      A3: examQuestionsA3,
    },
    developer: {
      D1: examQuestionsA4,
    },
    architect: {
       // Empty until you have an Architect Foundations question bank.
    }
    

  };

  const sharedValuesAndMethods = {
    questions,
    certifications,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      {children}
    </QuizContext.Provider>
  );
}
 
const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;
