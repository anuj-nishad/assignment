import { useCallback } from "react";
import { useState, memo } from "react";

function Assignment2(){
  const [input, setinput ] = useState();

  const showalert = useCallback(()=>{
    setinput(e=>alert(e))
  },[])

  return <div>
    <input type="text" placeholder="Enter the message" onChange={(e)=>setinput(e.target.value)}/>
    <Button alert={showalert}></Button>
  </div>
}

const Button= memo(({alert})=>{
  return <div>
    <button onClick={alert}>Show Alert</button>
  </div>
})

export default Assignment2; 