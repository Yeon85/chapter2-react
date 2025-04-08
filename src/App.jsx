import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [buttonValue, setButtonValue] = useState(0); // 버튼에 표시될 숫자


  const handleClick = () => {
    setInput(count.toString() + " ");
    //setInput((prev) => prev + count.toString() + " ");
    
  };
  
  const handleIncrement = () => {
    setCount( buttonValue+ 1);             // 현재 버튼 값만큼 count 증가
    setButtonValue(buttonValue + 1);           // 버튼 숫자도 +1
    setInput( `${count+1}`); // 결과를 input에 누적
  };
  return (
    <div className="center">
      <p>현재 카운트: {count}</p>
      <button onClick={handleIncrement}>+{buttonValue}</button>
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>클릭</button>

      <br /><br />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="입력해보세요"
      />
      <p>현재 입력값: {input}</p>
    </div>
  );
}

export default App;