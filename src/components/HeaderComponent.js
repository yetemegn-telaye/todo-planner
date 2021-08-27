import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler,Nav, NavItem, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };
      this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
   
    render(){
    return(
        <React.Fragment>
            <Navbar dark className="fixed header" expand="md">
                <div className="container header-container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand href="#">
                        <img src="../assets/images/logo4.jpg" className="logo" height="43" alt="todo-planner"/>
                    </NavbarBrand>
                    <Collapse navbar isOpen={this.state.isNavOpen} className="justify-content-end">
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