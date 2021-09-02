import React, {useState} from 'react';
import { Card, CardBody, CardHeader, Row,Col, CardText,Button,
    Breadcrumb,BreadcrumbItem, ModalHeader, ModalBody, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import {LocalForm, Control, Errors} from 'react-redux-form';


const maxLength = (len) =>(val) => !(val) || (val.length <= len) ;
const minLength = (len) => (val) => (val) && (val.length >= len);

function RenderCategories({category}) {
    return(
        <Card body outline color="primary">
            <CardHeader tag="h5">{category.name}</CardHeader>
            <CardBody>
                <span className="text-muted">{new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(category.createdDate)))}</span>
                <CardText>{category.description}</CardText>
                <Link to={`/categories/${category.id}`}>
                    <Button className="btn btn-outline-primary">View Tasks</Button>
                </Link>
            </CardBody>
        </Card>
    );
}
function CategoryForm(){
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
                    Add Category
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
                        <Row className="form-group">
                            <Label htmlFor="startdate" md={4}>Created Date:</Label>
                            <Col md={8}>
                                <Input type="date" name="startdate"
                                className="form-control" />
                                    
                            </Col>
                        </Row>
                        <Row className="form-contro">
                            <Col md={{size:10, offset: 4}}>
                                <Button outline color="primary" >Create</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
             </Modal>
        </div>
    );
}

const Category = (props)=>{
    const category = props.cats.map((category)=>{
        return(
            <div key={category.id} className="col-12 col-md-5 m-3">
                <RenderCategories category={category}/>
            </div>
        );
    })
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
               <CategoryForm/>
            </div>
        </div>
        
    );
}
export default Category;