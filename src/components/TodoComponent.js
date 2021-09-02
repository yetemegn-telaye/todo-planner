import React from 'react';
import {Breadcrumb,BreadcrumbItem, ListGroup,Button,Row,Col, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



const maxLength = (len) =>(val) => !(val) || (val.length <= len) ;
const minLength = (len) => (val) => (val) && (val.length >= len);

function RenderTodos ({todo}){
    return(
        <div >
            <ListGroup>
               <ListGroupItem className="d-inline-flex p-2 bd-highlight">
                   <span className="mr-auto">{todo.name} ({todo.description})</span>
                   
                 
                    <a className="btn btn-dark btn-floating text-white">
                        <i className="fa fa-pencil-square-o bg-info mr-1"></i>
                          Edit
                    </a>
                    <a className="btn btn-light btn-floating text-white ml-2">
                        <i className="fa fa-trash-o fa-lg bg-danger"></i>
                    </a>
                    
                   
                    
               </ListGroupItem> 
               
               
            </ListGroup>
        </div>
    );
}
function AddTodoForm(){
    const handleNewTask= (newtask)=>{
        alert('Added Task is: ' + JSON.stringify(newtask));
    }
    return(
        <div className="col-12">
                    <LocalForm onSubmit={(newtask)=>handleNewTask(newtask)}>
                        <Row className="form-group">
                            <Col md={8}>
                                <Control.text model=".taskname" name="taskname" 
                                placeholder="Add Your Task Here" className="form-control"
                                validators={{minLength: minLength(3), maxLength: maxLength(10)}}
                                />
                                <Errors
                                    model=".taskname" show="touched" className="text-danger"
                                    messages={{
                                        minLength: 'Task name should be greater than 3 Characters',
                                        maxLength: 'Task name should be less than 10 Characters',
                                    }}
                                />
                            </Col>
                            <Col md={2}>
                                <Button outline color="success" className="btn m-auto mt-3 ">+ Add New</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
    );
}
const Todo = (props) => {
    if (props.tasks != null){
    const todo = props.tasks.map((task)=>{
        return(
            <div key={task.id} className="col-12 m-2">
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
            <div className="row container ml-5">
                <AddTodoForm/>
            </div>
            <div className="row container m-auto">
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