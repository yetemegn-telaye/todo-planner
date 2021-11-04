import React,{useState} from 'react'
import {Breadcrumb,BreadcrumbItem,ListGroup,Row,Col, ListGroupItem,Button,ModalHeader, ModalBody,Label} from 'reactstrap';
import Modal from 'react-modal';
import { Control,Errors,LocalForm } from 'react-redux-form';
import {Link} from 'react-router-dom';





const maxLength = (len) =>(val) => !(val) || (val.length <= len) ;
const minLength = (len) => (val) => (val) && (val.length >= len);


//TASK EDIT FORM
function TaskEditForm({curr_task,edit_cattask}){
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
        alert("updated Task: " + JSON.stringify(values));
        edit_cattask(curr_task.id,curr_task.categoryId,values.name,values.desc,values.stat,values.hrs);
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

function RenderAllTasks({task,edit_cattask,delete_cattask}) {
    return(
        <div className="col-12">
        <ListGroup>
        <ListGroupItem className="d-inline-flex p-2 bd-highlight">
            <span className="mr-auto">{task.name} ({task.description})</span>
            
            <TaskEditForm curr_task={task} edit_cattask={edit_cattask}/>
             <RemoveTask delete_cattask={delete_cattask} task_id={task.id}/>
             
        </ListGroupItem> 
     </ListGroup>
     </div>
    );
}

export const AllTasks = (props) => {

            const tasks = props.tasks.todos.map((task)=>{
                return(
                    <div key={task.id} className="col-12 col-md-12 m-3">
                        <RenderAllTasks task={task} edit_cattask={props.edit_cattask} delete_cattask={props.delete_cattask}/>
                    </div>
                    );
            });

    return (
        <div className="container">
            <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Tasks</BreadcrumbItem>
                    </Breadcrumb>
                        <div className="col-12 mt-5">
                            <h2 className="text-secondary">All Tasks</h2>
                            <hr/>
                        </div>
            </div>
            <div className="row">
                {tasks}
            </div>
        </div>
    )
}
