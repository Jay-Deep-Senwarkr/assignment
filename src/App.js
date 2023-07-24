import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [inputList, setInputList] =useState("")
  const [Items, setItems] =useState([]);
  const itemEvents = (event) => { 
    setInputList(event.target.value);

  };

  const listOfItems = () => {
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    })
  };
  return <>
  <div className="main-div">
    <div className="center_div">
      <br />
      <h1> To do List</h1>
      <br />
      <input type="text" placeholder="Add Item" onChange={itemEvents}/>
      <button onClick={listOfItems}>+</button>

      <ol>
        {Items.map ((itemval) => {
          return <li> {itemval} </li>
        })}
      </ol>
    </div>
  </div>
  </>;
};

export default App;
