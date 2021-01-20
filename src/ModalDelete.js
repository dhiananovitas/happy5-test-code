import React from "react";

export default ({ 
    close

}) => (
  <div className="modal-delete">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="content-del">
        <h2>Delete Task</h2>
         <div className="deltask">
             <p className="delnote">Are you sure want to delete this task? your action can’t be reverted.</p>
            <div className="button-delete-wrap">
            <button onClick={close} className="button-cancel">Cancel</button>
            <button className="button-del"><p>Delete</p></button>
            </div>
        </div>
    </div>
  </div>
);