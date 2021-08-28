import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText,Button,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCategories({category}) {
    return(
        <Card body outline color="info">
            <CardHeader tag="h5">{category.name}</CardHeader>
            <CardBody>
                <span className="text-muted">{new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(category.createdDate)))}</span>
                <CardText>{category.description}</CardText>
                <Link to={`/categories/${category.id}`}>
                    <Button className="btn-theme">View Tasks</Button>
                </Link>
            </CardBody>
        </Card>
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
                <Button className="btn-success m-auto">Add Category</Button>
            </div>
        </div>
        
    );
}
export default Category;