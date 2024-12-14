import React from 'react';
import './index.css';
import stations from './radio_list.json';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-600 text-white p-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg text-red-500">
        Radio Streaming App
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {stations.map((station) => (
          <div
            key={station.id}
            className="relative p-6 bg-white text-gray-800 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Station Image / Icon */}
            <div className="absolute top-4 left-4 p-2 bg-blue-600 text-white rounded-full shadow-lg">
              <i className="fas fa-headphones-alt text-2xl"></i>
            </div>
            
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">{station.name}</h2>
            
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Frequency:</span> {station.frequency ?? 'N/A'} MHz
            </p>
            
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Location:</span> {station.address ?? 'Not available'}
            </p>

            {/* Audio Player */}
            <div className="flex flex-col space-y-4">
              <audio controls className="w-full rounded-xl shadow-md">
                <source src={station.streamUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              
              <div className="flex justify-between items-center text-gray-600">
                <span className="font-medium">{station.name}</span>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-all">
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
