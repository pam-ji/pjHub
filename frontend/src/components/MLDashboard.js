
import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_MODELS = gql`
  query GetModels {
    models {
      id
      name
      type
      status
      version
      metrics {
        accuracy
        loss
      }
      lastTrained
    }
  }
`;

const START_TRAINING = gql`
  mutation StartTraining($input: StartTrainingInput!) {
    startTraining(input: $input) {
      id
      status
      progress
    }
  }
`;

export default function MLDashboard() {
  const { data, loading, error } = useQuery(GET_MODELS);
  const [startTraining] = useMutation(START_TRAINING);
  const [selectedModel, setSelectedModel] = useState(null);

  if (loading) return <div>Loading models...</div>;
  if (error) return <div>Error loading models</div>;

  const handleStartTraining = async (modelId) => {
    try {
      await startTraining({
        variables: {
          input: { modelId }
        }
      });
    } catch (err) {
      console.error('Training error:', err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">ML Models Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.models.map(model => (
          <div key={model.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl">{model.name}</h3>
            <p>Type: {model.type}</p>
            <p>Status: {model.status}</p>
            <p>Version: {model.version}</p>
            {model.metrics && (
              <div className="mt-2">
                <p>Accuracy: {model.metrics.accuracy}</p>
                <p>Loss: {model.metrics.loss}</p>
              </div>
            )}
            <button
              onClick={() => handleStartTraining(model.id)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Start Training
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
