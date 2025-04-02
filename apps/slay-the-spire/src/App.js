
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_GAME_STATS } from '../../frontend/src/graphql/queries';

function SlayTheSpire() {
  const [gameState, setGameState] = useState(null);
  const { data, loading } = useQuery(GET_GAME_STATS);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">SlAI The Spire</h1>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="game-viewport bg-black aspect-video rounded-lg"></div>
        {loading ? (
          <p>Loading game stats...</p>
        ) : (
          <div className="stats mt-4">
            <p>Win Rate: {data?.gameStats?.winRate}%</p>
            <p>Games Played: {data?.gameStats?.gamesPlayed}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SlayTheSpire;
