import { nanoid } from "nanoid";
import React, { useState } from "react";
import BodyElems from "./BodyElems/BodyElems";
import NewElemClick from "./NewElem/NewElemClick";

const list = [
  { id: nanoid(), text: "Wake Up", isEdit: false, isRedax : false },
  { id: nanoid(), text: "Make a diner", isEdit: false, isRedax : false },
  { id: nanoid(), text: "Walk with dog ", isEdit: false, isRedax : false },
];

function Body() {
  const [elems, setElems] = useState(list);

  return <>
  <ul><BodyElems elems ={elems} setElems ={setElems}/></ul>
      <NewElemClick elems = {elems} setElems ={setElems}/>
  </>

}

export default Body;
