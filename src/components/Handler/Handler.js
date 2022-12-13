// import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
function id() {
  return nanoid();
}



function Handler() {
  let res = <h1 style={{"color": "blak", "backgroundColor": "green"}}>This is my first TO DO LIST</h1>

  return <>
  {res}
  </>
} 

export default Handler;
