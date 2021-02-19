const Questions = ({
  currentQuestion,
  questions,
  handleOptionSelect,
  currentAnswerSelected,
}) => {
  return (
    <>
      <div className="col-md-12 mb-2 text-left">
        {currentQuestion + 1}.{questions[currentQuestion].question}
      </div>
      <>
        {questions[currentQuestion].options.map((option) => (
          <div className="col-md-6" key={option.id}>
            <button
              type="button"
              onClick={() =>
                handleOptionSelect(option, questions[currentQuestion].id)
              }
              className={`btn btn-light d-block w-100 mb-2 ${
                currentAnswerSelected.id === option.id && "active"
              }`}
            >
              {option.description}
            </button>
          </div>
        ))}
      </>
    </>
  );
};

export default Questions;
