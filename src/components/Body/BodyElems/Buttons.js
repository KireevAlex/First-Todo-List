import React, { useEffect, useState } from 'react'


function Button({id, name}) {

  function deliteElem(id) {
    let newArr = [];
    elems.map((elem) => {
      if (elem.id !== id) {
        newArr.push(elem);
      }
    });
    setElems(newArr);
  }

  return (
    <div> </div>
  )
}

export default Button
