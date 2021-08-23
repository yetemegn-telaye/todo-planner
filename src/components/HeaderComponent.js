import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="#">Todo-Planner</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
    }
}
export default Header;