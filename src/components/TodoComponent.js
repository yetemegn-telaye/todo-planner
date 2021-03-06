import React, {useState} from 'react';
import {Breadcrumb,BreadcrumbItem, ListGroup,Button,Row,Col, ListGroupItem,ModalHeader, ModalBody,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Loading from './LoadingComponent';



const maxLength = (len) =>(val) => !(val) || (val.length <= len) ;
const minLength = (len) => (val) => (val) && (val.length >= len);


//View Tasks
function RenderTodos ({todo,cat,edit_cattask,delete_cattask}){

    function handleCheck(e){
        if(e.target.checked == true){
            console.log(todo.completed);
        }
        else
            //document.getElementById("tsk").style.textDecorationLine="none";
            console.log(todo.completed);
            
    }

    return(
        <div >
            <ListGroup>
               <ListGroupItem className="d-inline-flex p-2 bd-highlight">
                    <input type="checkbox" className="mt-3" onClick={(e)=>handleCheck(e)}/>
                   <span className="mr-auto">
                        
                       <Link to={`/categories/${cat}/${todo.id}`} className="text-muted nav-link cattask-link">
                           
                           <span className="text-uppercase text-warning font-weight-bold" className="tsk">{todo.name} &nbsp;&nbsp;</span>  
                           ({todo.description})
                       </Link>
                    </span>
                   
                    <TaskEditForm curr_task={todo} edit_cattask={edit_cattask} cat={cat}/>
                    
                  <RemoveTask delete_cattask={delete_cattask} task_id={todo.id}/>
                    
                   
                    
               </ListGroupItem> 
               
               
            </ListGroup>
        </div>
    );
}
//DELETE A TASK
function RemoveTask({delete_cattask,task_id}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    };
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    };
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          
        }
    };
   function handleClicked(e){
           if(e.target.name=="yes"){
               delete_cattask(task_id);
               alert("Successfully Deleted");
           }
           else
                setModalIsOpenToFalse();
       
        
        //delete_cattask(task_id);
    }
  
    return(
        <div className="m-2">
             <a  className="btn btn-danger btn-floating btn-sm text-white" onClick={setModalIsOpenToTrue}>
                 <span className="fa fa-trash-o mr-2"></span>
                    (delete)</a>
             <Modal isOpen={modalIsOpen} style={customStyles}>
                 <span type="button" className="btn btn-outline-danger rounded-pill float-right"
                    
                   onClick={setModalIsOpenToFalse} >
                <i className="fa fa-times text-secondary"></i>
                </span>
                <ModalHeader className="text-secondary">
                   Delete
                </ModalHeader>
                <hr/>
                <ModalBody>
                    <LocalForm>
                        <Row className="form-group">
                            <Label htmlFor="name" md={8}>Are you sure , you want to delete the task?</Label>
                            
                        </Row>
                        
                       
                        <Row className="text-center">
                            <Col md={{size:3, offset: 2}} className="mb-2">
                                <Button outline color="danger" onClick={(e)=>handleClicked(e)} name="yes" id="yes">YES</Button>
                            </Col>
                            <Col md={{size:3}}>
                                <Button outline color="success" onClick={(e)=>handleClicked(e)} name="no" id="no">CANCEL</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
             </Modal>
        </div>
    );

}

//TASK EDIT
function TaskEditForm({curr_task,edit_cattask,cat}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    };
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    };
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          
        }
    };
   function handleSubmit(values){
        alert("updated Category: " + JSON.stringify(values));
        edit_cattask(curr_task.id,cat,values.name,values.desc,values.stat,values.hrs);
    }
  
    return(
        <div className="m-2">
             <a  className="btn-light btn-sm text-secondary" onClick={setModalIsOpenToTrue}>
                 <span className="fa fa-pencil-square-o mr-2"></span>
                    (Edit)</a>
             <Modal isOpen={modalIsOpen} style={customStyles}>
                 <span type="button" className="btn btn-outline-danger rounded-pill float-right"
                    
                   onClick={setModalIsOpenToFalse} >
                <i className="fa fa-times text-secondary"></i>
                </span>
                <ModalHeader className="text-secondary">
                    EDIT
                </ModalHeader>
                <hr/>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="name" md={4}>NAME:</Label>
                            <Col md={8}>
                                <Control.text model=".name" name="name" 
                                placeholder={curr_task.name} className="form-control"
                                validators={{minLength: minLength(3), maxLength: maxLength(15)}}
                                />
                                <Errors
                                    model=".name" show="touched" className="text-danger"
                                    messages={{
                                        minLength: 'Must be Greater than 3 Characters',
                                        maxLength: 'Must be Less than 15 Characters'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="desc" md={4}>DESCRIPTION:</Label>
                            <Col md={8}>
                                <Control.textarea model=".desc" name="desc" rows="2"
                                placeholder={curr_task.description} className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="stat" md={4}>Status:</Label>
                            <Col md={8}>
                                <Control.text model=".stat" name="stat"
                                placeholder={curr_task.completed} className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="hrs" md={4}>Hours to spend:</Label>
                            <Col md={8}>
                                <Control.text model=".hrs" name="hrs"
                                placeholder={curr_task.hrs} className="form-control" />
                            </Col>
                        </Row>
                       
                        <Row className="text-center">
                            <Col md={{size:10, offset: 4}}>
                                <Button outline color="success" >Done</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
             </Modal>
        </div>
    );

}


function AddTodoForm({post_cattask,cat_id}){
    const handleNewTask= (newtask)=>{
        alert('Added Task is: ' + JSON.stringify(newtask));
        post_cattask(cat_id, newtask.taskname);
    }
    return(
        <div className="col col-md-7 m-2">
                    <LocalForm onSubmit={(newtask)=>handleNewTask(newtask)}>
                        <Row className="form-group">
                            <Col md={8}>
                                <Control.text model=".taskname" name="taskname" 
                                placeholder="Add Your Task Here" className="form-control mb-2"
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
                                <Button className="btn btn-outline-info">+ Add New</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
    );
}
const Todo = (props) => {
    if(props.tasksLoading){
        return(
            <div className="container">
                <Loading/>
            </div>
        );
    }
    else if(props.tasksErrMsg){
        return(
            <h3>{props.tasksErrMsg}</h3>
        );
    }
    else 
        if (props.tasks != null){
        const todo = props.tasks.map((task)=>{
            return(
                <div key={task.id} className="col-12 m-2">
                    <RenderTodos todo={task} cat={props.cats.id} edit_cattask={props.edit_cattask} delete_cattask={props.delete_cattask}/>
                </div>
            );
        }) 
        return(
            <div className="container ">
                
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/categories">Categories</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Task List</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 mt-5">
                        <h2 className="text-info text-uppercase">{props.cats.cat_name}</h2>
                        
                        <hr/>
                        
                    </div>
                </div>
                    
                <div className="row container m-auto justify-content-center outline" color="info">
                    <AddTodoForm post_cattask = {props.post_cattask} cat_id={props.cats.id}/>
                </div>
                <h5 className="text-secondary text-center m-4">All Tasks</h5>
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