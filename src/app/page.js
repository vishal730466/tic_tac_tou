"use client"
import Image from "next/image";

//import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
   
  const myset = [[1,2,3] , [4,5,6]]
  const [turn , setTurn] = useState("p1");
  
  let a= true;
  const fillbox = (a)=>{
    if(turn == "p1"){
      // document.getElementById(a).innerHTML="o";
      a.innerHTML="O"
      setTurn("p2")
      a=false
    console.log(turn)
    }
    else{
      // document.getElementById(a).innerHTML="x";
      a.innerHTML="X"
      setTurn("p1")
    }
  }
  var boxes;
  useEffect(()=>{

   var boxes = document.querySelectorAll(".box")
  //  // const a = boxes.addEventListener("click",myfun);
   boxes.forEach((box) => {
    box.addEventListener("click",()=> {fillbox(box)});
  });
  }, [] )
console.log("a is ",a);

  return (<>
  {/* {fillbox()} */}
   <h1>Tic tac toe</h1>
  <div id="con">
 
  <div className="box" id="box0" onClick={()=>fillbox("box0")}> </div>
  <div className="box" id="box1"> </div>
  <div className="box" > </div>
  <div className="box" > </div>
  <div className="box" > </div>
  <div className="box" > </div>
  <div className="box" > </div>
  <div className="box" > </div>
  <div className="box"> </div>
  </div>

  
  </>
  
  );
}
