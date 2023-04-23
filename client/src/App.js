import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [data,setData] = useState("");
  useEffect(()=>{
    fetch('http://localhost:4000')
    .then(res => res.json())
    .then(res => {
      setData(res);
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
