import React, { useState } from 'react';
import '../styles/QuestionBox.css';
import Result from './Result';

const QuestionBox = ({ questionData, questionNumber, totalQuestions, handleAnswer, score, darkMode  }) => {
  const [highlight, setHighlight] = useState(false);
  const [redirectToResult, setRedirectToResult] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  const handleOptionClick = (optionId) => {
    if (questionNumber === totalQuestions) {
      setRedirectToResult(true);
    } else {
      handleAnswer(optionId);
      setHighlight(false);
    }
  };

  if (redirectToResult) {
    return <Result score={score} />;
  }

  return (
    (
    <div className="question-box">
        <div className="question-header">
          <div className="question-number">Question: {questionNumber} out of {totalQuestions}</div>
        </div>
        <div className={`question-text ${highlight ? 'highlight' : ''}`}>{questionData.text}</div>
        <div className="options">
          {questionData.options.map((option) => (
            <div
              key={option.id}
              className="option"
              onClick={() => handleOptionClick(option.id)}
            >
              {option.text}
            </div>
          ))}
        </div>
          <button className="toggle-button" onClick={toggleHighlight}>
            Toggle Highlight
          </button>
      </div>
    )
  );
};
export default QuestionBox;