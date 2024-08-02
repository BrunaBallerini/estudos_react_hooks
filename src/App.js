import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button className='button' onClick={() => incrementButton(10)}>Increment</button>;
});


function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'App-logo-reverse' : '';
  const handleReverse = () => { setReverse(() => (!reverse)) };
  const handleCounter = useCallback((num) => { setCounter((c) => c + num) }, []);

  useEffect(() => {
    console.log('componentDidUpdate - executa toda a vez que component atualiza');
  });

  useEffect(() => {
    console.log('componentDidMount - executa 1x');
  }, []);

  useEffect(() => {
    console.log('componentDidMount Reverse - executa toda a vez que a dependencia atualizar');
  }, [reverse]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h2>Contador: {counter}</h2>
        <button className='button' type='button' onClick={handleReverse}>Reverse</button>
        <button className='button' onClick={() => handleCounter(10)}>Increment</button>
        <Button incrementButton={handleCounter} />
      </header>
    </div>
  );
}

export default App;
