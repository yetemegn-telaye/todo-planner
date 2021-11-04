import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Category from './CategoryComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Todo from './TodoComponent';
import { connect } from 'react-redux';
import { post_category, edit_category, edit_cattask,delete_cattask, delete_category,post_cattask, fetchCats, fetchCatTasks } from '../redux/ActionCreators';
import { AllTasks } from './AllTasksComponent';
import { ViewTask } from './ViewTaskComponent';

const MapStateToProps = state=>{
    return{
        todos: state.todos,
        categories: state.categories
    }
}
const MapDispatchToProps = (dispatch) =>({
    post_category: (cat_name,cat_description)=> {dispatch(post_category(cat_name,cat_description))},
    post_cattask: (cat_id, task_name)=> {dispatch(post_cattask(cat_id,task_name))},
    fetchCats: ()=>{dispatch(fetchCats())},
    fetchCatTasks: ()=>{dispatch(fetchCatTasks())},
    edit_category: (cat_id,cat_name,cat_description)=>{dispatch(edit_category(cat_id,cat_name,cat_description))},
    edit_cattask: (task_id,cat_id, task_name,task_desc,task_status,hrs)=>{dispatch(edit_cattask(task_id,cat_id, task_name,task_desc,task_status,hrs))},
    delete_cattask: (task_id)=>{dispatch(delete_cattask(task_id))},
    delete_category: (cat_id)=>{dispatch(delete_category(cat_id))}
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
                    cats={this.props.categories.categories.filter((cat)=>cat.id === parseInt(match.params.categoryId,10))[0]}
                    post_cattask = {this.props.post_cattask}
                    edit_cattask = {this.props.edit_cattask}
                    delete_cattask={this.props.delete_cattask}
                    tasksLoading= {this.props.todos.isLoading}
                    tasksErrMsg = {this.props.todos.errMsg}
                />
            );
        }
        const TaskView = ({match})=>{
            return(
                <ViewTask tasks={this.props.todos.todos.filter((todo)=>todo.id === parseInt(match.params.todoId,10))[0]}
                tasksLoading= {this.props.todos.isLoading}
                    tasksErrMsg = {this.props.todos.errMsg}
                    edit_cattask = {this.props.edit_cattask}
                    delete_cattask={this.props.delete_cattask}
                    cats={this.props.categories.categories.filter((cat)=>cat.id === parseInt(match.params.categoryId,10))[0]}
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
                        post_category={this.props.post_category}
                        edit_category={this.props.edit_category}
                        delete_category={this.props.delete_category}
                        />}/>
                        <Route exact path="/categories/:categoryId" component={CategoryTasks} />
                        <Route exact path="/alltasks" component={()=><AllTasks tasks={this.props.todos} 
                         edit_cattask = {this.props.edit_cattask}
                        delete_cattask={this.props.delete_cattask}/>}/>
                        <Route exact path="/categories/:categoryId/:todoId" component={TaskView}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(MapStateToProps,MapDispatchToProps)(Main));