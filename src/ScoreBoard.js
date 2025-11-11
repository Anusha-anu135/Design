import React from 'react';

function ScoreBoard({ score, total }) {
  return (
    <div className="score-board">
      Score: {score}/{total}
    </div>
    
  );
}

export default ScoreBoard;





   /* <><>
      <Questioncard />
      <Scoreboard />
    </><div className='Quiz-App'>
        <div className='score'>
          <h2>Your score :5/5</h2>
          <button>Restart</button>
        </div>

        <div className='Question'>
          <h2>Question 1</h2>

          <h2>What is React?</h2>
          <div className='option1'>

            <button className='first'>library </button>
          </div>

          <div className='options2'></div>
          <button className='second'>framework</button>
          <div className='option3'></div>
          <button className='third'>Render</button>
          <div className='option4'></div>
          <button className='fourth'>ReactDOM</button>
        </div>
        <button className='ques'>Next</button>

        <div className='timer'>Left Time: <span>20s</span></div>
      </div></>
      
    
  );
}

export default App;*/

  