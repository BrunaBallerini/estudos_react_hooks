import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'App-logo-reverse' : '';
  const handleReverse = () => { setReverse(() => (!reverse)) };
  const handleCounter = () => { setCounter((c) => c + 1) };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h2>Contador: {counter}</h2>
        <button className='button' type='button' onClick={handleReverse}>Reverse</button>
        <button className='button' type='button' onClick={handleCounter}>Increment</button>
      </header>
    </div>
  );
}

export default App;
