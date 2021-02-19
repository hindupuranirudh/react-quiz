const QuizEngagement = ({
  handleNextQuestion,
  currentAnswerSelected,
  showAnswers,
  timer,
}) => {
  return (
    <div className=" col-md-12">
      <button
        className="btn btn-secondary mr-4"
        onClick={() => handleNextQuestion(false)}
      >
        Skip question
      </button>
      <button
        className="btn btn-success"
        disabled={!currentAnswerSelected.id}
        onClick={() => handleNextQuestion(true)}
      >
        Submit
      </button>
      <h4 className="mt-4 text-right text-danger">
        Seconds Remaining: {!showAnswers && timer}
      </h4>
    </div>
  );
};

export default QuizEngagement;
