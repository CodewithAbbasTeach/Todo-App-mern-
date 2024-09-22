import React from 'react';
import axios from "axios";
import { AiFillEdit} from "react-icons/ai";
import { RxCross1} from "react-icons/rx";
import { baseURL } from '../utils/constant';

const Todo = ({text,id,setUpdateUI,setShowPopup,setPopupContent}) => {


  const deleteTodo=()=>{
    axios.delete(`${baseURL}/delete/${id}`).then(res=>{
      console.log(res.data);
      setUpdateUI((prevState)=>!prevState);
    });
  };
  const updateTodo=()=>{
    setPopupContent({ text,id })
    setShowPopup(true);

  };
  return (
    <div className='toDo'>

      {text}
     <div className="icons">
     <AiFillEdit className='icon' onClick={updateTodo} />
     <RxCross1 className='icon' onClick={deleteTodo}/>
     </div>
    </div>
    
  

  )
}

export default Todo
