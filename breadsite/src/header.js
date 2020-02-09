import React from 'react';
import logo from './logo.svg';
import breadsite from './breadsite.png'
import hamburger from './hamburger.png'
import redX from './red_x.png'
import Modal from 'react-responsive-modal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
    return(
      <div className="header-div">
      <header className="App-header">
        <span>
          <DropDown/>
        </span>
        <span>  
          <img src={breadsite} className="App-logo" alt="logo" />
        </span>
      </header>
    </div>
    )
  }
  
class DropDown extends React.Component {
  
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      }
    }
  
    dropdownClick = () => {
      this.setState(prevState => ({
        showMenu: !prevState.showMenu
      }));
    }
  
    onOpenModal = () => {
      this.setState({ showMenu: true });
    };
   
    onCloseModal = () => {
      this.setState({ showMenu: false });
    };
    // https://stackoverflow.com/questions/54067249/react-responsive-modal-change-background-color-when-modal-is-open
    render(){
      const { showMenu } = this.state;
      const bg = {
        overlay: {
          background: "rgba(255, 255, 0, 0)",
          left: "-77%",
          top:"30px"
        }
      };
      return (
        <div className="DropdownDiv">
          <div className="DropdownDiv">
            { 
              this.state.showMenu ? 
                (
                  <img src={redX} className="Dropdown-logo" alt="logo" onClick={this.dropdownClick}/>
                  
                ) : (
                  <img src={hamburger} className="Dropdown-logo" alt="logo" onClick={this.dropdownClick}/>
                )
            }
          </div>
          <Modal open={showMenu} onClose={this.onCloseModal} left styles={bg} closeIconSize={0}>
            <h2>Page Navigation Pane</h2>
            <Link to="/" onClick={this.onCloseModal}>Home</Link>
            <p />
            <Link to="/about" onClick={this.onCloseModal}>About</Link>
            <p />
          </Modal>
        </div>
      )
    }
}