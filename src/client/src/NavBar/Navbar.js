
import './Navbar.css';
import React, {Component} from "react";
import  { MenuItems }  from "./MenuItems";
import {Button} from "./Button";
import './LogoR.png';



class Navbar extends Component { 
  state = {clicked:false}
  
  handleClick = () => { 
      this.setState({clicked: !this.state.clicked})
  }

  render(){ 
    return( 
      <nav className="NavbarItems">
         <h1 className="navbar-logo"> <img src={require("./LogoR.png")} width="100px" height="80px" ></img> </h1> 
         <h1 className="stonkName">Stonks.io</h1>
           <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item, index) => { 
               return ( 
                    <li key={index}>
                      <a className={item.cName}
                       href={item.url}>
                      {item.title}
                      </a>
                    </li> 
               ) 
             })}
         </ul> 
         {/* <Button> Login</Button> */}
      </nav>
    )
            }

          
}


export default Navbar;
