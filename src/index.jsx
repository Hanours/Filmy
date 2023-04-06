import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Articles from './components/Articles';
import Reviews from './components/Reviews';
import Home from './components/Home';

const App = () => {
  return (
    <div className="container">

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
