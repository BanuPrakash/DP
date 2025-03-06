import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './builder/FormBuilder';
import PostCard from './components/PostCard';

function App() {
  let elements = new FormBuilder()
    .input({ "label": "Name" })
    .input({ "label": "Email" })
    .input({ "label": "Age" })
    .checkbox({ "label": "Subscribe for newsletter" })
    .build();

  return (
    <div className="App">
      {elements}
      <PostCard
        post={{
          id: 12,
          title: "My First Post",
          content: "Details of First Post",
          user: {
            id: 62,
            name: 'Banu Prakash'
          }
        }
        }>
           <PostCard.Profile />
            <PostCard.Buttons />
            <PostCard.Title />
           
        </PostCard>
    </div>
  );
}

export default App;
