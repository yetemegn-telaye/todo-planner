import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Category from './CategoryComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Todo from './TodoComponent';
import { connect } from 'react-redux';
import { add_category, add_cattask, fetchCats, fetchCatTasks } from '../redux/ActionCreators';

const MapStateToProps = state=>{
    return{
        todos: state.todos,
        categories: state.categories
    }
}
const MapDispatchToProps = (dispatch) =>({
    add_category: (cat_name,cat_description)=> {dispatch(add_category(cat_name,cat_description))},
    add_cattask: (cat_id, task_name)=> {dispatch(add_cattask(cat_id,task_name))},
    fetchCats: ()=>{dispatch(fetchCats())},
    fetchCatTasks: ()=>{dispatch(fetchCatTasks())}
});
class Main extends Component{
    constructor(props){
        super(props);
      
    }
   componentDidMount(){
       this.props.fetchCats();
       this.props.fetchCatTasks();
   }
    render(){
        const CategoryTasks = ({match})=>{
            return(
                <Todo tasks={this.props.todos.todos.filter((todo)=>todo.categoryId === parseInt(match.params.categoryId,10))}
                    cats={this.props.categories.categories.filter((cat)=>cat.cat_id === parseInt(match.params.categoryId,10))[0]}
                    add_cattask = {this.props.add_cattask}
                    tasksLoading= {this.props.todos.isLoading}
                    tasksErrMsg = {this.props.todos.errMsg}
                />
            );
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route exact path="/categories" component={()=><Category cats={this.props.categories.categories}
                        catsLoading = {this.props.categories.isLoading}
                        catsErrMsg = {this.props.categories.errMsg}
                        add_category={this.props.add_category}/>}/>
                        <Route exact path="/categories/:categoryId" component={CategoryTasks} />
                        <Route exact path="/todos" component={Todo}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(MapStateToProps,MapDispatchToProps)(Main));