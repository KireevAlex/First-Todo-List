import { nanoid } from "nanoid";
import React, { useState } from "react";
import ElemListRender from "./ElemsList";

function BodyElems({ elems, setElems }) {
  function deliteElem(id) {
    let newArr = [];
    elems.map((elem) => {
      if (elem.id !== id) {
        newArr.push(elem);
      }
    });
    setElems(newArr);
  }

  function readyElem(id) {
    let copy = elems.map((elem) => {
      if (elem.id == id) {
        elem.isEdit = !elem.isEdit;
      }
      return elem;
    });

    setElems(copy);
  }

  function redaxElem(id) {
    let copy = elems.map((elem) => {
      if (elem.id == id) {
        elem.isRedax = !elem.isRedax;
      }
      return elem;
    });

    setElems(copy);
  }

  const result = elems.map((elem) => {
    return (
      <li key={elem.id} >
        <ElemListRender elem={elem} setElems={setElems} elems = {elems}/>
        <button
          onClick={() => {
            readyElem(elem.id);
          }}
        >
          ready
        </button>
        <button
          onClick={() => {
            redaxElem(elem.id);
          }}
        >
          redax
        </button>
        <button
          onClick={() => {
            deliteElem(elem.id);
          }}
        >
          X
        </button>
      </li>
    );
  });

  return <>{result}</>;
}

export default BodyElems;
