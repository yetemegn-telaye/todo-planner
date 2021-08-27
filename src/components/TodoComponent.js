import React from 'react';
import {Breadcrumb,BreadcrumbItem, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderTodos ({todo}){
    return(
        <div>
            <ListGroup>
               <ListGroupItem>{todo.name} ({todo.description})</ListGroupItem> 
            </ListGroup>
        </div>
    );
}
const Todo = (props) => {
    if (props.tasks != null){
    const todo = props.tasks.map((task)=>{
        return(
            <div key={task.id} className="col-12 m-1">
                <RenderTodos todo={task}/>
            </div>
        );
    }) 
    return(
        <div className="container ">
            
            <div className="row mt-5">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/categories">Categories</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Tasks</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 mt-5">
                    <h2 className="text-secondary">Tasks</h2>
                    <hr/>
                </div>
            </div>
            <div className="row row-todo-content">
                    {todo}
            </div>
        </div>
    );
    }
    else {
        return(
            <div>Task is null</div>
        );
    }
}
export default Todo;