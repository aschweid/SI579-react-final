import { useState } from 'react';

const Counter = () => {
  // Make the stepper button behavior match the example. There are limits to how high
  // or low the count can go.
  // Some of the initial JSX is provided for you - not all.
  const [count, setCount] = useState(5);
  return (
    <div>
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}>-</button>
      <output>{count}</output>
      <button
        disabled={count === 10}
        onClick={() => setCount(count + 1)}

      >+</button>

      {count ===10 ? <p><b>Count is too high</b></p>: <></>}
      {count ===0 ? <p><b>Count is too low</b></p>: <></> }
    </div>
  )
};

export default Counter;