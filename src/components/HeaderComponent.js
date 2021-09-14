import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler,Nav, NavItem, Collapse,Button,Modal, ModalHeader, ModalBody,Form ,
     Input , FormGroup, Label, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
   toggleModal(){
       this.setState({
           isModalOpen: !this.state.isModalOpen
       })
   }
   handleSubmit(event) {
       this.toggleModal();
       alert("username: " + this.username.value+ "password: " + this.password.value+
        "remember: " + this.remember.checked);
        event.preventDefault();

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
                        <Nav>
                            <NavItem>
                                <Button outline color="primary" onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                        <h2>Day Planner</h2>
                        <p>Organize your life with us, starting from your longterm goals to your day to day activities. Plan your days ahead and Make your life better.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" 
                             innerRef={(input)=>this.username=input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input)=>this.password=input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" 
                                innerRef={(input)=>this.remember=input}/> 
                                Remember me
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" value="submit" color="success">Login</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
    }
}
export default Header;