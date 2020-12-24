import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";

function App() {
  return (
    <Sentry.ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <button onClick={() => {
            throw new Error('madp err webpack plugin111')
          }}>break world</button>
        </header>
      </div>
    </Sentry.ErrorBoundary>
  );
}

export default App;
