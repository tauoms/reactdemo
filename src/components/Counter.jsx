const Counter = (props) => {
  return (
    <div className="counterDiv">
      <p className="counterP">Counter: {props.counterProp}</p>
      <button onClick={props.clickIncrease}>Increase +1</button>
      <button onClick={props.clickDecrease}>Decrease -1</button>
      <button onClick={props.clickResetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
