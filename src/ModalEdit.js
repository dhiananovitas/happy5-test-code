import React from "react";

export default ({ 
    close

}) => (
  <div className="modal-add">
    <a className="close" onClick={close}>
      &times;
    </a>
    <h2>Edit Task</h2>
    <div className="content">
         <div className="addtask">
            <form>
              <label>Task Name</label>
              <input type="text" placeholder="example: Build rocket to Mars."/>
              <label>Weight</label>
              <input type="text" placeholder="0%" style={{width:'64px',height:'36px'}}/>

              <div className="button-add-wrap">
                <button onClick={close} className="button-cancel">Cancel</button>
                <button className="button-submit">Save Task</button>
              </div>
            </form>
        </div>
    </div>
  </div>
);