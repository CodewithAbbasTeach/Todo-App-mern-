import React,{useState} from 'react';
import axios from "axios"
import {RxCross1} from "react-icons/rx"
import { baseURL } from '../utils/constant';
const Popup = ({setShowPopup,popupContent,setUpdateUI}) => {
    
    const [input,setInput] =useState(popupContent.text);


 const updateTodo=()=>{
    axios.put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
    .then((res)=>{
        console.log(res.data)
        setUpdateUI((prevState)=>!prevState);
        setShowPopup(false)
    });
 };
  return (
    <div className='backdrop'>
      <div className="popup">
        <RxCross1 className="cross" onClick={()=>setShowPopup(false)}/>
        <h1>Update ToDo</h1>
        <div className="popup__input_holder">
        <input type="text" 
        placeholder='update a Todo...' 
        value={input} 
        onChange={(e)=>setInput(e.target.value)} />
        <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Popup
