import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import "./assets/css/result.css";
import "./assets/css/home.css";
import "./assets/css/quiz.css";
import "./assets/css/certifications.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
