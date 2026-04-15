import { useState } from 'react';

const Counter = () => {
  // Make the stepper button behavior match the example. There are limits to how high
  // or low the count can go.
  // Some of the initial JSX is provided for you - not all.
  const [count, setCount] = useState(5);
  return (
    <div>
      {count ===10 ? <p>Count is too high</p>: <></>}
      {count ===0 ? <p>Count is too low</p>: <></> }

      <button
        disabled={count === 2}
        onClick={() => setCount(count - 1)}>-</button>
      <output>{count}</output>
      <button
        disabled={count === 11}
        onClick={() => setCount(count + 1)}

      >+</button>
    </div>
  )
};

export default Counter;