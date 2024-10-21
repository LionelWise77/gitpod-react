import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/functionalGreeting';
import FunctionalGreetingWithProps from './components/functionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      < FunctionalGreeting />
      < FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
