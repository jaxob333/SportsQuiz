import React from 'react';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Quiz />
      <Leaderboard />
    </div>
  );
}

export default App;
