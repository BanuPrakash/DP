import logo from './logo.svg';
import './App.css';
import SpanText from './components/SpanText';
import Colored from './components/Colored';
import Input from './components/Input';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Colored>
        <SpanText text="React in Action" />
      </Colored>
      <Input />
      <Display />
    </div>
  );
}

export default App;
