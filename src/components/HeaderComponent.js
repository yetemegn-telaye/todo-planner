import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler,Nav, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
      
    }
   
    render(){
    return(
        <React.Fragment>
            <Navbar dark color="dark" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand href="#">Todo-Planner</NavbarBrand>
                    <Collapse navbar className="justify-content-end">
                        <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/categories">
                                    Categories
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/todos">
                                    Todos
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
    }
}
export default Header;