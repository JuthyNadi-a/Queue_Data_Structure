import React, {useState} from 'react';
import './App.css';


const App = () => {
  const [arrayValue, setArrayValue] = useState([]);
  
  const enqueue = () => {
    let tempArray = [...arrayValue];
    tempArray.push(tempArray.length + 1);
    setArrayValue(tempArray);
  };

  const dequeue = () => {
    let tempArray = [...arrayValue];
    tempArray.shift()
    setArrayValue(tempArray);
  };

  return (
    <div className='queueWrapper'>
      <div className='queueContainer'>
        <h1>Queue Data Structure</h1>
        <p>First In First Out</p>
      </div>
      <div className='queueValueContainer'>
        {arrayValue.map((val) => {
          return <div className='queueValue'>{val}</div>
        })}
      </div>
      <div className='pushpopContainer'>
        <div className='pushBtn' onClick={enqueue}>Enqueue</div>
        <div className='popBtn' onClick={dequeue}>Dequeue</div>
      </div>
    </div>
  );
};

export default App;
