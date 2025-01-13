import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./App.css";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleIncrementClick = () => {
    dispatch(increment());
  };
  const handleDecrementClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleIncByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count : {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input
        type="Number"
        placeholder="Enter number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleIncByAmount}>Increment by {amount}</button>
    </div>
  );
}

export default App;
