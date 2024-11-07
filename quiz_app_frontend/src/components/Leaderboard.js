import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createConsumer } from "@rails/actioncable";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch initial scores
    axios.get('http://localhost:3002/api/v1/scores')
      .then(response => {
        console.log("Fetched scores:", response.data);
        setScores(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the scores!", error);
      });

    // Set up Action Cable connection
    const cable = createConsumer("ws://localhost:3002/cable");
    const scoreChannel = cable.subscriptions.create("ScoreChannel", {
      received(data) {
        console.log("Received score update:", data.score);
        // Check if the score already exists
        setScores(prevScores => {
          const existingScoreIndex = prevScores.findIndex(score => score.id === data.score.id);
          if (existingScoreIndex > -1) {
            // If score exists, update it
            const updatedScores = [...prevScores];
            updatedScores[existingScoreIndex] = data.score;
            return updatedScores;
          } else {
            // If score does not exist, add it
            return [...prevScores, data.score];
          }
        });
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      scoreChannel.unsubscribe();
    };
  }, []);

  if (!Array.isArray(scores) || scores.length === 0) {
    return <div>No scores available.</div>;
  }

  return (
    <div>
      <h2>Leaderboard</h2>
      {scores.map(score => (
        <div key={score.id}>
          User ID: {score.user_id}, Points: {score.points}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
