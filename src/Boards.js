import React, { useState } from "react";
import Card from "./Tasks";
import Popup from "reactjs-popup";

import ModalAdd from "./ModalAdd";
import addicn from "./assets/add.svg";

function Boards(props){
  const {
    getTasks,
  column,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard, title, description, boardId,card,cardIndex,taskTitle,taskWeight } = props;

  
return(
  <div>

    {/* yg bener board */}
    <div className="board">
      <div className="board-title">
        <h3>{title}</h3>
        <b>{description}</b>
      </div>

        {card.map((card, cardIndex) => (
        <div>
          {console.log("Task",card[cardIndex])}
        <Card
          key={cardIndex}
          card={card}
          cardIndex={cardIndex}
          canMoveLeft={columnIndex !== 0}
          canMoveRight={columnIndex !== 2}
          onMoveLeft={() => onMoveLeft(cardIndex)}
          onMoveRight={() => onMoveRight(cardIndex)}
        />
        </div>
      ))}

      <div className="btn-add">
        <Popup modal trigger={<div><img src={addicn} alt="add-icon"/> Create new task</div>}>{close => <ModalAdd close={close} />}</Popup>
      </div>
    </div>
  </div>
)
}

export default Boards;