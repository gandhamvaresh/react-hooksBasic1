import React, { useState, useEffect, Component } from "react";
import { render } from "react-dom";
import "./css/style.css";

const born = false;
function App() {
  const [num, setNum] = useState(0);
  const [achi, setachi] = useState(false);

  useEffect(() => {
    console.log("I am first call");
  }, []);

    useEffect(() => {
      if(born){
        document.title="you achived";
      }
  },[achi]);

  useEffect(() => {
    if(born){
      console.log("every : your calling now");
     }else{
       console.log("every : your calling and restricting");
       born = true;
     }
    if(num > 50){
       setachi(true);
     }else{
      setachi(false)}
  });

  function clickHandle() {
    setNum(num + 10);
  }
  return (
    <div>
      Number Is:  {num}<br/><br/><br/>
      <button onClick={clickHandle}> add </button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
