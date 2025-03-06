import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './builder/FormBuilder';

function App() {
  let elements = new FormBuilder()
  .input({"label": "Name"})
  .input({"label": "Email"})
  .input({"label": "Age"})
  .checkbox({"label":"Subscribe for newsletter"})
  .build();
  return (
    <div className="App">
      {elements}
    </div>
  );
}

export default App;
