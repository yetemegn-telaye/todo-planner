import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Category from './CategoryComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Todo from './TodoComponent';
import {TODOS} from '../shared/todos';
import {CATEGORIES} from '../shared/categories';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: TODOS,
            categories: CATEGORIES
        }
    }
   
    render(){
        const CategoryTasks = ({match})=>{
            return(
                <Todo tasks={this.state.todos.filter((todo)=>todo.categoryId === parseInt(match.params.categoryId,10))}/>
            );
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route exact path="/categories" component={()=><Category cats={this.state.categories}/>}/>
                        <Route exact path="/categories/:categoryId" component={CategoryTasks} />
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;