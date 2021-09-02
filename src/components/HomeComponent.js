import React from 'react';
import Category from './CategoryComponent';
import Todo from './TodoComponent';
import {Link} from 'react-router-dom';
import {Card, CardText, CardTitle, Button, CardDeck} from 'reactstrap';

const Home = (props) => {
    return(
        <div className="container">
           <CardDeck className="row justify-content-center">
               <Link to="/categories" className=" col-md-4 col-sm-12 col-xs-12 m-3">
                    <Card body inverse color="info" >
                            <CardTitle tag="h5">View Categories</CardTitle>
                            <CardText>Click to view your categories</CardText>
                    </Card>
                </Link>
                <Link to="/todos" className="col-md-4 col-sm-12 col-xs-12 m-3">
                    <Card body inverse color="warning" >
                            <CardTitle tag="h5">View Tasks</CardTitle>
                            <CardText>View Todays Tasks</CardText>
                    </Card>
                </Link>
                    <Card body inverse color="light" className="col-md-4 col-sm-12 col-xs-12 m-3 text-dark" >
                            <CardTitle tag="h5">Start Today</CardTitle>
                            <CardText>
                                Add your Daily Task
                                <span className="btn btn-light ml-2">
                                    <i className="fa fa-plus-circle fa-lg" style={{color: "#fffdbf", width:50}}></i>
                                </span>
                            </CardText>
                    </Card>
                
           </CardDeck>
        </div>

    );
}
export default Home;