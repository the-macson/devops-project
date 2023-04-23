import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const [data,setData] = useState("");
  useEffect(()=>{
    axios.get("/api")
    .then(res=>{
      setData(res.data)
    })
  },[])
  return (
    <div className="App">
      <h1>Hello World</h1>
      {data.name} : {data.reg}
    </div>
  );
}

export default App;
