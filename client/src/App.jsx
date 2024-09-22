import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import Popup from './components/Popup'
import axios from "axios";
import { baseURL } from './utils/constant';

const App = () => {
const [toDos, setTodos] =useState([]);
const [input,setInput]=useState("");
const [updateUI,setUpdateUI] =useState(false);
const [showPopup, setShowPopup] =useState(false);
const [popupContent,setPopupContent] =useState({})
  useEffect(()=>{
    axios
      .get(`${baseURL}/get`)
      .then((res) => setTodos(res.data))
      .catch((err)=>console.log(err));
  }, [updateUI]);

  const saveToDo=()=>{
      axios.post(`${baseURL}/save`, {toDo:input}).then(res=>{
        setUpdateUI((prevState)=>!prevState)
        console.log(res.data);
          setInput("");
      })
      .catch((err)=>console.log(err))
  }
  return (
   <main>
    <div className="container">
      <h1 className="title">ToDo App</h1>
      <div className="input_holder">
        <input type="text" placeholder='Add a Todo...' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={saveToDo}>Add</button>
      </div>

      <div className="list">
       {toDos.map(el=><Todo key={el._id} text={el.toDo} id={el._id} setUpdateUI={setUpdateUI} setShowPopup={setShowPopup} setPopupContent={setPopupContent}/>)}
       

      </div>
    </div>
    
    {showPopup && <Popup setShowPopup={setShowPopup} popupContent={popupContent} setUpdateUI={setUpdateUI}/ >}
   </main>
  )
}

export default App
