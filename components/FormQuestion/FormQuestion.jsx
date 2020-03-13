import React from "react";

const FormQuestion = ({ questionsArray }) => {
  return (
    <div>
      {questionsArray.map(question => {
        return (
          <>
            <div className="question-container">
              <label htmlFor="text">{question}</label>
              <input type="text" />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FormQuestion;
