import { nanoid } from "nanoid";
import React, { useState } from "react";


function NewElemClick({elems, setElems}){
  const [newElem, setNewElem] = useState('');

  function changeNewElem(event){
    setNewElem(event.target.value)
  }

  function addNewElem(){
    let copy = Object.assign([], elems)
    let elem = {id:nanoid(), text: newElem, isEdit: false}
    copy.push(elem);
    setNewElem('');
    setElems(copy);
  }
  
  return <>
    <input value={newElem} onChange={(event)=>{changeNewElem(event)}}></input>
    <button onClick={()=>{addNewElem()}}>Add</button>
  </>
}

export default NewElemClick;