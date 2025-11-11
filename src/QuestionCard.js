


import React from 'react';

function QuestionCard({ question, options, selectedAnswer, onSelect, showResult, correctAnswer }) {
  return (
    <div className="question-card">
      <h3 className="question-text">{question}</h3>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} className="option-item">
            <label className={`option-label ${showResult ? (index === correctAnswer ? 'correct' : selectedAnswer === index ? 'incorrect' : '') : ''}`}>
              <input
                type="radio"
                name="answer"
                checked={selectedAnswer === index}
                onChange={() => onSelect(index)}
                disabled={showResult}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;