import React from 'react';
import './index.css';
import stations from './radio_list.json';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 text-white p-4">
      <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
        Radio Streaming App
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stations.map((station) => (
          <div
            key={station.id}
            className="p-6 bg-white text-gray-800 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-600">{station.name}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Frequency:</span> {station.frequency ?? 'N/A'} MHz
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Location:</span> {station.address ?? 'Not available'}
            </p>
            <audio controls className="mt-4 w-full rounded-lg overflow-hidden">
              <source src={station.streamUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;