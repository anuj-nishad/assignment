import { useState, useMemo} from "react";

const words = ['hi', 'everyone', 'we', 'are', 'learning', 'react', 'for', 'now']
const total_lines = 1000;
const All_words = [];

for(let i = 0; i<=total_lines; i++){
  let sentence = "";
    for(let i = 0; i<words.length; i++){
      sentence += words[Math.floor(words.length * Math.random())];
      sentence += " ";
    }

  All_words.push(sentence);  
}

function Assignment2(){
  const [sentences, setsentence] = useState(All_words)
  const [filter , setfilter] = useState("")

  const filterSentences = useMemo(()=>{
    return sentences.filter(x=>x.includes(filter))
  },[sentences,filter])

  return <div>
    <input placeholder="Search" onChange={(e)=>setfilter(e.target.value)} style={{margin: "10px", fontSize: "17px"}}></input>
    {filterSentences.map((word,id)=><div key={id}>{word}</div>)}
  </div>
}

export default Assignment2;