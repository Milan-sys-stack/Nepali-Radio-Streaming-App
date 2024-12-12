import React from 'react';
import stations from './radio_list.json';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Radio Streaming App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((station) => (
          <div key={station.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{station.name}</h2>
            <p className="text-gray-600">Frequency: {station.frequency ?? 'N/A'} MHz</p>
            <p className="text-gray-600">{station.address ?? 'Address not available'}</p>
            <audio controls className="mt-4 w-full">
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
