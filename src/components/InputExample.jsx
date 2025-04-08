import { useState } from 'react';

function InputExample() {
  const [input, setInput] = useState('');

  const handleClick = () => {
    alert('클릭되었습니다!');
  };

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
      <br />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="입력해보세요"
      />
      <p>입력값: {input}</p>
    </div>
  );
}

export default InputExample;