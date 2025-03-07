import logo from './logo.svg';
import './App.css';
import SpanText from './components/SpanText';
import Colored from './components/Colored';
import Input from './components/Input';
import Display from './components/Display';
import DogImage from './components/DogImage';
import CommandApp from './components/CommandApp';

function App() {
  return (
    <div className="App">
      <CommandApp />
      <DogImage />
      <Colored>
        <SpanText text="React in Action" />
      </Colored>
      <Input />
      <Display />
    </div>
  );
}

export default App;
