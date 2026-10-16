# Claude Associate Foundations – Mock Exam App

A scenario-based mock exam web app for practicing the
**Claude Associate Foundations** certification, built with React (Hooks),
React Router and plain CSS.

## Features

- Certification selector (Associate, Developer; Architect coming soon).
- Multiple question sets per certification, with a random set drawn each
  time you start a quiz.
- Two question types:
  - **Multiple choice**: a single correct answer.
  - **Multiple response**: 2–3 correct answers; the question states how
    many to select.
- Question styles: standard scenarios, "what should you do first" and
  ordering questions.
- Per-question countdown timer with automatic advance when time runs out.
- Progress tracking during the quiz.
- Results screen with percentage score and a full answer review showing
  your answer, the correct answer, the exam domain and an explanation.

## Exam domains covered

| Domain | Weight |
|---|---|
| Prompting and Task Execution | 14% |
| Output Evaluation and Validation | 21% |
| Product and Model Selection | 12% |
| Workflow Integration and Solution Design | 16% |
| Configuration and Knowledge Management | 12% |
| Governance, Risk, and Responsible Use | 15% |
| Troubleshooting and Optimisation | 10% |

## Getting started

    npm install
    npm start

The app runs at http://localhost:3000.

## Question format

    {
      id: 1,
      domain: "Output Evaluation and Validation",
      time: 60,
      question: "...",
      answers: [
        { answer: "...", trueAnswer: true },
        { answer: "...", trueAnswer: false }
      ],
      explanation: "..."
    }

Multiple-response questions also include `type: "multiple"` and
`selectCount: N`.

## Adding question banks

1. Create a new file, e.g. `examQuestionsBankA5.js`, exporting an array of
   question objects.
2. Import it in `QuizContext.js` and register it under the right
   certification in the `questions` object.

## Credits

This project is a customized version based on
[React Quiz App](https://github.com/yasinakbulut25/react-quiz-app) by
**Yasin Akbulut**, shared with his permission. The original UI structure
and styles come from that project, and the original author retains credit
for that work.

The certification content, question banks, multiple-response logic and
other modifications were developed by me with the assistance of
[Claude](https://claude.ai), an AI assistant by Anthropic. The question
content was AI-generated from a prompt and specification that I designed,
and then reviewed and integrated by me.

The original repository does not declare an open-source license. Yasin
kindly granted permission to publish this modified version with credit to
the original project. If you wish to reuse the original UI code, please
contact the original author.

## Disclaimer

This is an unofficial, independent study tool. It is not affiliated with
or endorsed by Anthropic, and the questions are not real exam content.