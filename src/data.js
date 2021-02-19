//Questions & Answers separately.
const questions = [
  {
    id: 1,
    question:
      "What function allows you to render React content in an HTML page?",
    options: [
      { description: "React.mount()", id: 1 },
      { description: "ReactDOM.start()", id: 2 },
      { description: "ReactDOM.render()", id: 3 },
      { description: "React.render()", id: 4 },
    ],
  },
  {
    id: 2,
    question: "Arbitrary inputs of components in React are called",
    options: [
      { description: "Keys", id: 1 },
      { description: "Props", id: 2 },
      { description: "Elements", id: 3 },
      { description: "Ref", id: 4 },
    ],
  },
  {
    id: 3,
    question: "For controlled components in react",
    options: [
      {
        description: "Source of truth is DOM",
        id: 1,
      },
      {
        description: "Source of truth can be anything",
        id: 2,
      },
      {
        description: "Source of truth is component state",
        id: 3,
      },
      { description: "None of the above", id: 4 },
    ],
  },
  {
    id: 4,
    question: "React.js was created by",
    options: [
      { description: "Jordan Walke", id: 1 },
      { description: "Jordan Mike", id: 2 },
      { description: "Tim Lee", id: 3 },
      { description: "Jordan Lee", id: 4 },
    ],
  },
];

const answers = [
  { id: 1, answer: "ReactDOM.render()", optionId: 3, questionId: 1 },
  { id: 2, answer: "Props", optionId: 2, questionId: 2 },
  {
    id: 3,
    answer: "Source of truth is component state",
    optionId: 3,
    questionId: 3,
  },
  { id: 4, answer: "Jordan Walke", optionId: 1, questionId: 4 },
];

const tableHeaders = ["#id", "Question", "Answer", "Your choice"];

export { questions, answers, tableHeaders };
