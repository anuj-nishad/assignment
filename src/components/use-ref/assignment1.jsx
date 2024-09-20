import { useEffect } from "react";
import { useRef } from "react";

function Assignment1(){

  const inputref = useRef();

  useEffect(()=>{
    inputref.current.focus()
  },[inputref])

  return <div>
    <input type="text" placeholder="Enter the text" ref={inputref}/>  
    <button onClick={()=>{inputref.current.focus()}}>Click this</button>
  </div>
}

export default Assignment1;