import React, {useState} from 'react';
import { Card, CardBody, CardHeader, Row,Col, CardText,Button,
    Breadcrumb,BreadcrumbItem, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import {LocalForm, Control, Errors} from 'react-redux-form';
import Loading from './LoadingComponent';


const maxLength = (len) =>(val) => !(val) || (val.length <= len) ;
const minLength = (len) => (val) => (val) && (val.length >= len);

function RenderCategories({category,edit_category,delete_category}) {
    return(
        <Card body outline color="info">
            <CardHeader tag="h5" className="text-uppercase">{category.cat_name} 
                   
                <span className="float-right" style={{display: "flex"}}>
                    <CategoryEditForm cat={category} edit_category={edit_category}/>
                   
                    <RemoveCategory cat_id={category.id} delete_category={delete_category} />
                </span>
            </CardHeader>
            <CardBody>
               
                <CardText className="text-muted">
                    {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(category.cat_createdDate)))}
                    <p className="text-uppercase">{category.cat_description}</p>
                </CardText>
                <Link to={`/categories/${category.id}`}>
                    <Button className="btn btn-outline-info">View Tasks</Button>
                </Link>
            </CardBody>
        </Card>
    );
}


//DELETE A CATEGORY
function RemoveCategory({delete_category,cat_id}){
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
               delete_category(cat_id);
               alert("Successfully Deleted");
           }
           else
                setModalIsOpenToFalse();
       
        
    }
  
    return(
        <div className="m-2">
             <a  className="btn btn-danger btn-floating btn-sm text-white"  onClick={setModalIsOpenToTrue}>
                 <span className="fa fa-trash-o mr-1" style={{"paddingLeft":"4px"}}></span>
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
                            <Label htmlFor="name" md={8}>Are you sure , you want to delete the category?</Label>
                            
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


function CategoryEditForm({cat,edit_category}){
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
        edit_category(cat.id,values.name,values.desc);
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
                            <Label htmlFor="name" md={4}>Title:</Label>
                            <Col md={8}>
                                <Control.text model=".name" name="name" 
                                placeholder={cat.cat_name} className="form-control"
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
                            <Label htmlFor="desc" md={4}>Description:</Label>
                            <Col md={8}>
                                <Control.textarea model=".desc" name="desc" rows="2"
                                placeholder={cat.cat_description} className="form-control" />
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

//To ADD A CATEGORY
function CategoryForm({post_category}){
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
        alert("Added Category: " + JSON.stringify(values));
        post_category(values.name, values.desc);
    }
  
    return(
        <div className="m-auto">
             <Button  className="btn-theme m-auto" onClick={setModalIsOpenToTrue}>
                 <span className="fa fa-pencil-square-o mr-2"></span>
                    Add Category</Button>
             <Modal isOpen={modalIsOpen} style={customStyles}>
                 <span type="button" className="btn btn-outline-danger rounded-pill float-right"
                    
                   onClick={setModalIsOpenToFalse} >
                <i className="fa fa-times text-secondary"></i>
                </span>
                <ModalHeader>
                    New Category
                </ModalHeader>
                <hr/>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="name" md={4}>Title:</Label>
                            <Col md={8}>
                                <Control.text model=".name" name="name" 
                                placeholder="Category Title" className="form-control"
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
                            <Label htmlFor="desc" md={4}>Description:</Label>
                            <Col md={8}>
                                <Control.textarea model=".desc" name="desc" rows="2"
                                placeholder="Description" className="form-control" />
                            </Col>
                        </Row>
                       
                        <Row className="text-center">
                            <Col md={{size:10, offset: 4}}>
                                <Button outline color="info" >Create</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
             </Modal>
        </div>
    );
}

const Category = (props)=>{
    if(props.catsLoading){
        return(
            <div className="container">
                <Loading/>
            </div>
        );
    }
    else if(props.catsErrMsg){
        return(
            <div className="container">
                <h4>{props.catsErrMsg}</h4>
            </div>
        );
    }
    else{
        const category = props.cats.map((category)=>{
            return(
                <div key={category.id} className="col-12 col-md-5 m-3">
                    <RenderCategories category={category} edit_category={props.edit_category} delete_category={props.delete_category} />
                </div>
                );
        });
        return(
            <div className="container">
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Categories</BreadcrumbItem>
                    </Breadcrumb>
                        <div className="col-12 mt-5">
                            <h2 className="text-secondary">Categories</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        {category}
                    </div>
                    <div className="row">
                    <CategoryForm post_category={props.post_category}/>
                    </div>
                </div>
                
            );}
}
export default Category;