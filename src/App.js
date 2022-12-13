// import React from "react";
//import React, { Component } from "react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Handler from "./components/Handler/Handler";
import Body from "./components/Body/Body";
function id() {
  return nanoid();
}



function App() {


  
  return <>
      <Handler/>
      <Body/>
  </>
}

export default App;
