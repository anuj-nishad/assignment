
//Create a component that tracks and displays the number of times it has been rendered.

import { useRef , useState} from "react";

function Assignment2(){
  const [count, setcount ] = useState(0)

  const numberoftimesrendered = useRef(0)

  function handler(){
    setcount(count+1)
  }
  numberoftimesrendered.current += 1;

  return <div>
    <p>This component has rendered {numberoftimesrendered.current} times</p>
    <button onClick={handler}>Click me</button>
  </div>
}

export default Assignment2;