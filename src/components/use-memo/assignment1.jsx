import { useMemo } from "react";
import { useState } from "react";


function Assignment1(){

  const [input,setinput] = useState(1);

  const factorial = useMemo(()=>{
    let fact = 1;
    for(let i = input; i>0; i--)
    fact *= i;
    
    return fact
  },[input])
  
  return <div>
    <input placeholder="Enter a number" onChange={(e)=> setinput(e.target.value)}></input>
    <p>Factorial is {factorial}</p>
  </div>
}

export default Assignment1;