const Counter = (props) => {
  return (
    <div>
      <p>Counter: {props.counterProp}</p>
      <button onClick={props.clickIncrease}>Increase +1</button>
      <button onClick={props.clickDecrease}>Decrease -1</button>
      <button onClick={props.clickResetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
