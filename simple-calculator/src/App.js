import './App.css';
import React, { useState, useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  
  const plus = e => {
    e.preventDefault();
    setResult((result2) => result2 + +inputRef.current.value);
  }

  const minus = e => {
    e.preventDefault();
    setResult((result3) => result3 - +inputRef.current.value);
  }

  const multiply = e => {
    e.preventDefault();
    setResult((result) => result * +inputRef.current.value);
  }

  const divide = e => {
    e.preventDefault();
    setResult((result) => result / +inputRef.current.value);
  }

  const resetInput = e => {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  const resetResult = e => {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simple Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a Number'/>
          <button onClick={plus}> add </button>
          <button onClick={minus}> subtract </button>
          <button onClick={multiply}> multiply </button>
          <button onClick={divide}> divide </button>
          <button onClick={resetInput}> reset input </button>
          <button onClick={resetResult}> reset result </button>
      </form>





      {/* <h1>Simple Working Calculator</h1>
      <p>{result}</p>
      <div className='InputBoxDiv'>
        <input className='InputStyle' type="number" value={userInput} 
          onChange={(e) => setUserInput(e.target.value)}/>
      </div>
      <div className="ArithmaticButtons">
        <button className='buttonCls' onClick={() => setResult(+result + +userInput)}> add </button>
        <button className='buttonCls' onClick={() => setResult(result - userInput)}> subtract </button>
        <button className='buttonCls' onClick={() => setResult(result * userInput)}> multiply </button>
        <button className='buttonCls' onClick={() => setResult(result / userInput)}> divide </button>
        <button className='buttonCls buttonColorCls' onClick={() => setUserInput(0)}> reset input</button>
        <button className='buttonCls buttonColorCls' onClick={() => setResult(0)}> reset result </button>
      </div> */}
    </div>
  );
}

export default App;
