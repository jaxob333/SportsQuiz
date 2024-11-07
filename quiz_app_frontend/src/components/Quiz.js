import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3002/api/v1/questions')
      .then(response => {
        console.log("Fetched questions:", response.data); // Log fetched questions
        if (Array.isArray(response.data) && response.data.length > 0) {
          setQuestions(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the questions!", error);
        setLoading(false); // Ensure loading state is updated even on error
      });
  }, []);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      const updatedScore = score + 1; // Calculate new score
      setScore(updatedScore); // Update local score state
  
      // Set user_id based on the username selected or fixed
      const userId = 1; // For now, keep it fixed; you can prompt for this later
  
      // Submit the updated score to the backend
      axios.post('http://localhost:3002/api/v1/scores', { score: { user_id: userId, points: updatedScore } })
        .then(response => {
          console.log("Score submitted successfully:", response.data);
        })
        .catch(error => {
          console.error("There was an error submitting the score!", error.response.data);
        });
    }
  
    // Move to the next question or finish quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! Your final score: ${score + 1}`);
    }
  };
  

  if (loading) {
    return <div>Loading questions...</div>;
  }

  // Check if questions are available
  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  // Ensure current question exists
  const currentQuestionData = questions[currentQuestion];
  if (!currentQuestionData) {
    return <div>No more questions available.</div>;
  }

  return (
    <div>
      <h2>{currentQuestionData.content}</h2>
      {currentQuestionData.answers && currentQuestionData.answers.length > 0 ? (
        currentQuestionData.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))
      ) : (
        <div>No answers available for this question.</div>
      )}
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Quiz;
