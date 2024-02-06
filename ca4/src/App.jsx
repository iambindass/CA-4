import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './questions';
import Navbar from './components/Navbar';
import './App.css';

// ... (other imports)

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const totalQuestions = questions.length;

  const handleAnswer = (selectedOptionId) => {
    const isCorrect = questions[currentQuestion].options[selectedOptionId].isCorrect;

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  // const restartGame = () => {
  //   setCurrentQuestion(0);
  //   setScore(0);
  // };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleColorMode={toggleColorMode} darkMode={darkMode} />
      {currentQuestion < totalQuestions ? (
        <QuestionBox
          questionData={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={totalQuestions}
          handleAnswer={handleAnswer}
          score={score}
          darkMode={darkMode}
        />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default App;
