import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Category from './CategoryComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Todo from './TodoComponent';

class Main extends Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route exact path="/categories" component={Category}/>
                        <Route exact path="/todos" component={Todo}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;