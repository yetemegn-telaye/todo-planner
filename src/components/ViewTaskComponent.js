import React, {useState} from 'react';
import {Breadcrumb,BreadcrumbItem, Card,CardBody,CardHeader,CardText,Row,Col,ModalHeader, ModalBody,Label,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = (len) =>(val) => !(val) || (val.length <= len) ;
const minLength = (len) => (val) => (val) && (val.length >= len);





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
        <div className="mr-1 mt-3">
             <a  className="btn btn-danger btn-floating btn-sm text-white" onClick={setModalIsOpenToTrue}>
                 <span className="fa fa-trash-o"></span>
                    </a>
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

//EDIT TASK HERE
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
        <div className="mt-3 mr-1">
             <a  className="btn-light btn-sm text-secondary" onClick={setModalIsOpenToTrue}>
                 <span className="fa fa-pencil-square-o"></span>
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


export const ViewTask = (props) => {
    

        return(
            <div className="container ">
                
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/categories">Categories</Link></BreadcrumbItem>
                        <BreadcrumbItem className="text-uppercase">  <Link to={`/categories/${props.cats.id}`}>Task List</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Task</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 mt-5">
                        <h2 className="text-info text-uppercase">{props.tasks.name} <span className="text-secondary font-weight-light">(Detail)</span></h2>
                        
                        <hr/>
                        
                    </div>
                </div>
                
                <div className="row container m-auto justify-content-center">
                    <div className="col-6">
                    <Card body outline color="info" className="text-uppercase">
                        <CardHeader tag="h5"> 
                            {props.tasks.name} 
                            <span className="float-right" style={{display: "flex"}}>
                            <TaskEditForm curr_task={props.tasks} edit_cattask={props.edit_cattask} cat={props.cats.id}/>
                            <RemoveTask delete_cattask={props.delete_cattask} task_id={props.tasks.id}/>
                            </span>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                            <p className="text-muted">
                                Due Date: {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(props.tasks.dueDate)))}
                                </p>
                                <p>Description: {props.tasks.description}</p>
                            <p>Hours spent: {props.tasks.hrs}(Hrs)</p>
                            <p>Status: {props.tasks.completed}</p>
                            </CardText>
                            
                        </CardBody>
                    </Card>
                    </div>
                    
                        
                </div>
            </div>
        );
}
