import { useMemo } from "react";
import { useState } from "react";

function Assignment3(){
  const [list,setlist] = useState([
    {name:"Choclates", price: 240},
    {name:"Biscuits", price: 100},
    {name:"Banana", price: 190},
    {name:"Chips", price: 54}
  ])

  const finalPrice = useMemo(()=>{
    let sum = 0;
    for(let i =0; i<list.length; i++)
      sum+=list[i].price;
    
    return sum;
  },[list]);

  return <div>
    <input placeholder="Enter the name"></input>
    <input placeholder="Enter the price"></input>
    <ul>
      {list.map((x,i)=><li key={i}><h3>{x.name}</h3><p>Price: {x.price}</p></li>)}
      <h1>Sum is {finalPrice}</h1>
    </ul>
  </div>
}

export default Assignment3;