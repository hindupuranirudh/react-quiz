import { useState, useEffect } from "react";
import "./App.css";
import { questions } from "./data";
import QuizHeader from "./components/quizHeader";
import AnswersTable from "./components/answersTable";
import QuizRules from "./components/quizRules";
import QuizEngagement from "./components/quizEngagement";
import Questions from "./components/questions";
const timerLimit = 20;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); //To know the current question
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState({}); // To know about the current answer selected.

  const [chosenAnswers, setChosenAnswers] = useState({}); //Entire list of selected answers (not using any localstate/ state library)
  const [showAnswers, setShowAnswers] = useState(false); //Boolean to show the results.
  const [timer, setTimer] = useState(timerLimit); // To run a timer as limit on each question.

  // To take care of the timer
  useEffect(() => {
    const timerFunction = setTimeout(() => {
      timer > 0 && setTimer(timer - 1);
    }, 1000);

    if (timer === 0 || currentQuestion === questions.length) {
      currentQuestion !== questions.length &&
        setCurrentQuestion(currentQuestion + 1); //Need not update the value once the current question reached final question in array.
      setTimer(timerLimit);
      setCurrentAnswerSelected({});
      clearTimeout(timerFunction);
    }
    return () => {
      clearTimeout(timerFunction); // if using any other component helps. currently not unmounting any component.
    };
  }, [timer, currentQuestion, showAnswers]);

  // Handle the case where no answer is selected/ question skipped. Resetting the quiz, ensuring that user selects atleast one question.
  useEffect(() => {
    const submittedAnswers = Object.keys(chosenAnswers).length === 0;
    currentQuestion === questions.length &&
      submittedAnswers &&
      setCurrentQuestion(0);
  }, [currentQuestion, chosenAnswers]);

  // Method which handles the case of submit/ skip scenario.
  function handleNextQuestion(isAnswerSelected) {
    if (isAnswerSelected) {
      const answers = {};
      const currentQuestionId = questions[currentQuestion].id;
      answers[currentQuestionId] = currentAnswerSelected;
      setChosenAnswers({ ...answers, ...chosenAnswers });
    }
    setCurrentAnswerSelected({});
    setTimer(timerLimit);
    setCurrentQuestion(currentQuestion + 1);
  }

  //Method which handles the option being selected.
  function handleOptionSelect(optionObj) {
    setCurrentAnswerSelected(optionObj);
  }

  //To show the results method.
  function handleQuiz(showAnswers) {
    console.log(chosenAnswers);
    if (showAnswers) return setShowAnswers(true);
  }

  return (
    <div className="App">
      <div className="container mt-5 pt-5">
        <div className="row ">
          <QuizHeader
            currentQuestion={currentQuestion}
            handleQuiz={handleQuiz}
            questions={questions}
            showAnswers={showAnswers}
            chosenAnswers={chosenAnswers}
          />

          {currentQuestion !== questions.length && (
            <>
              <Questions
                currentQuestion={currentQuestion}
                questions={questions}
                handleOptionSelect={handleOptionSelect}
                currentAnswerSelected={currentAnswerSelected}
              />
              <QuizRules />
              <QuizEngagement
                handleNextQuestion={handleNextQuestion}
                currentAnswerSelected={currentAnswerSelected}
                showAnswers={showAnswers}
                timer={timer}
              />
            </>
          )}
        </div>

        <AnswersTable
          showAnswers={showAnswers}
          questions={questions}
          chosenAnswers={chosenAnswers}
        />
      </div>
    </div>
  );
}

export default App;
