import React, { useState } from "react";
import './ElemList.css';


function ElemListRender({elem, setElems, elems}){
  let listElem; 


  if(!elem.isRedax){
    listElem = <span className={elem.isEdit? 'done' : 'notDone'}>{elem.text} : {elem.isEdit? 'Done' : 'Not done'} </span>
  }else {
    listElem = <input value={elem.text} onChange = {(event)=>{changeInput(event, elem.id)}}></input>
  }
  function changeInput(event , id){
    setElems(elems.map((el)=>{
      if(el.id == id){
        el.text = event.target.value
      }
      return el 
    })
    )
  }


return <>{listElem }</>
}

export default ElemListRender