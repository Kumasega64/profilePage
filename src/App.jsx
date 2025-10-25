import React from 'react';
import Page from "./components/Page";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Page />

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Timothy Dance
        </p>
      </footer>
    </div>
  );
}

export default App;
