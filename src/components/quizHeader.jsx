const QuizHeader = ({
  currentQuestion,
  chosenAnswers,
  showAnswers,
  handleQuiz,
  questions,
}) => {
  return (
    <>
      <div className="col-md-12 mb-5">
        <h1 className="text-primary">React Quiz</h1>
      </div>

      {currentQuestion === questions.length &&
        Object.keys(chosenAnswers).length && (
          <>
            <div className="col-md-12 text-center">
              <p>Thanks for participating</p>
              <>
                {!showAnswers && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleQuiz(true)}
                  >
                    Show Answers
                  </button>
                )}
              </>
            </div>
          </>
        )}
    </>
  );
};

export default QuizHeader;
