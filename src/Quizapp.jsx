import React, { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import ScoreBoard from './ScoreBoard';
import questionsData from './questions.json';
import './QuizApp.css';

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  const currentQuestion = questionsData[currentIndex];

  // Memoize handleSubmit so it has a stable reference
  const handleSubmit = useCallback(() => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowResult(true);
  }, [selectedAnswer, currentQuestion.correctAnswer]);

  // Timer effect for each question
  useEffect(() => {
    setTimeLeft(15);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, handleSubmit]); // handleSubmit is stable thanks to useCallback

  const handleAnswerSelect = (index) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  
  if (currentIndex >= questionsData.length) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed!</h2>
        <ScoreBoard score={score} total={questionsData.length} />
        <button className="restart-btn" onClick={() => window.location.reload()}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span>Question {currentIndex + 1} of {questionsData.length}</span>
        <span className="timer">Time: {timeLeft}s</span>
      </div>

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedAnswer={selectedAnswer}
        onSelect={handleAnswerSelect}
        showResult={showResult}
        correctAnswer={currentQuestion.correctAnswer}
      />

      {!showResult ? (
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
        >
          Submit
        </button>
      ) : (
        <button className="next-btn" onClick={handleNext}>
          Next Question
        </button>
      )}

      <ScoreBoard score={score} total={questionsData.length} />
    </div>
  );
}

export default QuizApp;