import { answers, tableHeaders } from "../data";

const AnswersTable = ({ showAnswers, questions, chosenAnswers }) => {
  return (
    <>
      {showAnswers && (
        <div className="my-4">
          <div className="text-center my-4">Answers are here</div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  {tableHeaders.map((header, key) => (
                    <th key={key}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <>
                  {answers.map((answer, key) => (
                    <tr key={key}>
                      <th>{answer.id}</th>
                      <td>
                        {questions[answer.questionId - 1] &&
                          questions[answer.questionId - 1].question}
                      </td>
                      <td>{answer.answer}</td>
                      <td>
                        {chosenAnswers[answer.questionId]
                          ? chosenAnswers[answer.questionId].description
                          : "Not Answered"}
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswersTable;
