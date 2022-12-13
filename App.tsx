import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import BookCard from './components/BookCard';
import Books from './components/Books'

function App() {
  return (
    <div data-testid='App' className="App">
      {/* <BookCard></BookCard>  */}
      <Books />
    </div>
  );
}

export default App;

