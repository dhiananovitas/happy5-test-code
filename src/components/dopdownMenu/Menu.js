import React from "react";
import righticn from "../../assets/right.svg";
import lefticn from "../../assets/left.svg";
import editicn from "../../assets/edit.svg";
import deleteicn from "../../assets/delete.svg";

import btn from "../../assets/meatball.svg";
import Popup from "reactjs-popup";
import ModalEdit from "../../ModalEdit";
import ModalDelete from "../../ModalDelete";


import "../dopdownMenu/menu.css";

class Menu extends React.Component{
    constructor(){
        super();

        this.state = {showMenu:true}

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = function() {
        this.setState({ showMenu: !this.state.showMenu });
      }

    render() {
        return(
            <div>
                <div className="meatball-menu" onClick={this.toggleMenu}><img  src={btn} alt="meatball-btn"/></div>

                <div className="content">
                {!this.state.showMenu &&
                <ul>
                    <li className="actionmenu"><div onClick={this.toggleMenu}><img  src={righticn} alt="right-icon"/> <p>Move Right</p></div></li>
                    <li className="actionmenu"><div onClick={this.toggleMenu}><img  src={lefticn} alt="left-icon"/> <p>Move Left</p></div></li>
                    <li className="actionmenu">
                        <Popup modal trigger={<div onClick={this.toggleMenu}><img  src={editicn} alt="edit-icon"/> <p>Edit</p></div>}>{close => <ModalEdit close={close} />}</Popup>
                    </li>
                    <li className="actionmenu">
                        <Popup modal trigger={<div onClick={this.toggleMenu}><img  src={deleteicn} alt="delete-icon"/> <p>Delete</p></div>}>{close => <ModalDelete close={close} />}</Popup>  
                    </li>
                </ul>
                }
                </div>

            </div>

        );
    }
}

export default Menu;