import { useCallback, useState, memo } from "react";

function Assignment1() {

  const [count, setcount] = useState(0);

  const incrementCount = useCallback(() => {
    setcount(function (currentCount) {
      return currentCount + 1;
    })
  }, [])


  const decrementCount = useCallback(() => {
    setcount(count=> count-1);

  }, [])

  return <div>
    <h1>Count: {count}</h1>
    <CountButtons increment={incrementCount} decrement={decrementCount} />
  </div>
}

const CountButtons = memo(({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
    </div>
  )
})

export default Assignment1;