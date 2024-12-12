### Nepali Radio Streaming Web App

A modern, user-friendly web application for streaming Nepali radio stations. Built using React, TypeScript, and Tailwind CSS, this app aims to provide a seamless experience for listening to radio stations from Nepal.

### Features

Stream Nepali Radio Stations: Browse and listen to a curated list of Nepali radio stations.

Responsive Design: Optimized for all devices, from mobile to desktop.

Dynamic Data Rendering: Stations are dynamically displayed from a JSON data file.

Audio Player Integration: Play radio streams directly within the app.

### Tech Stack

React: For building a dynamic and interactive user interface.

TypeScript: To enhance code reliability and maintainability.

Vite: A fast build tool for optimized performance.

Tailwind CSS: For utility-first, responsive styling.

### Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v16 or later)

npm or yarn

### Installation

## Clone the repository:

git clone <repository-url>
cd radio-streaming-app

## Install dependencies:

npm install

## Setup Tailwind CSS:
Tailwind is pre-configured in this project. The configuration file is located at tailwind.config.js.

### Running the App

## Start the development server:

npm run dev

The app will be available at the provided local development server URL (e.g., http://localhost:3000).

### Project Structure

radio-streaming-app/
├── public/
├── src/
│   ├── assets/          # Static assets (images, etc.)
│   ├── components/      # Reusable UI components
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global CSS (includes Tailwind imports)
│   ├── main.tsx         # Entry point for the app
│   ├── radio_list.json  # JSON file containing radio station data
│   └── ...
├── tailwind.config.js   # Tailwind configuration file
├── package.json         # Project dependencies and scripts
└── ...

### JSON Data File Structure

The radio station data is stored in src/radio_list.json with the following structure:

[
  {
    "id": 1,
    "name": "Radio Nepal",
    "frequency": "100.0",
    "address": "Kathmandu, Nepal",
    "streamUrl": "https://example.com/stream"
  },
  {
    "id": 2,
    "name": "Kantipur FM",
    "frequency": "96.1",
    "address": "Lalitpur, Nepal",
    "streamUrl": "https://example.com/stream2"
  }
]

id: Unique identifier for the station.

name: Name of the radio station.

frequency: Frequency in MHz.

address: Station’s address.

streamUrl: URL for the audio stream.

## Deployment

To deploy the app, build it for production:

npm run build

The production-ready files will be in the dist/ directory. You can host these files on any static hosting provider like Netlify, Vercel, or GitHub Pages.

## Future Enhancements

Search Functionality: Add a search bar to filter stations by name or location.

Categories: Group stations by region or genre.

Dark Mode: Implement a dark theme for user preference.

Offline Mode: Cache station data for offline access.

### Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature-branch).

Open a pull request.

### License

This project is licensed under the MIT License.

Enjoy streaming Nepali radio stations!

