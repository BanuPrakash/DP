import logo from './logo.svg';
import './App.css';
import SpanText from './components/SpanText';
import Colored from './components/Colored';

function App() {
  return (
    <div className="App">
      <Colored>
        <SpanText text="React in Action" />
      </Colored>

    </div>
  );
}

export default App;
