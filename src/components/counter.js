const Counter = ({ count, setCount }) => {
  return (
    <div className="counter-container">
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default Counter;
