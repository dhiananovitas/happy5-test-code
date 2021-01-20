import React from "react";
import weight from "./assets/weight.svg";
import Menu from "./components/dopdownMenu/Menu";

import "./App.css";

function Tasks(props){
  const {card,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight,taskTitle,taskWeight} = props

  return (
  <div>
    <div className="task">
      <h3 className="taskname">{taskTitle} Redesign Web</h3>
      
      <div className="task-btm">
        <div className="taskweight">
          <div className="weight-icon"><img  src={weight} alt="weight-icon"/></div>
          <div className="weights">{taskWeight}60%</div>
        </div>

        <Menu/> 
      </div> 
    </div>
  </div>
)}

const rootElement = document.getElementById("root");
export default Tasks;