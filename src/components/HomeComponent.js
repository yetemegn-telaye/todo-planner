import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardText, CardTitle, Button, CardDeck} from 'reactstrap';

const Home = (props) => {
    return(
        <div className="container">
           <CardDeck className="row justify-content-center">
               <Link to="/categories" className="col-md-4 col-sm-12 col-xs-12 m-3 links">
                    <Card body inverse color="info" >
                            <CardTitle tag="h5">View Categories</CardTitle>
                            <CardText>Click to view your categories</CardText>
                    </Card>
                </Link>
                <Link to="/alltasks" className="col-md-4 col-sm-12 col-xs-12 m-3 links">
                    <Card body inverse color="warning" >
                            <CardTitle tag="h5">View Tasks</CardTitle>
                            <CardText>View All Tasks</CardText>
                    </Card>
                </Link>
                    <Card body inverse color="light" className="col-md-4 col-sm-12 col-xs-12 m-3 text-dark" >
                            <CardTitle tag="h5">Start Today</CardTitle>
                            <CardText>
                                Add your Daily Task
                                <span className="btn btn-success ml-2 links">
                                    <i className="fa fa-plus-circle fa-lg"></i>
                                </span>
                            </CardText>
                    </Card>
                
           </CardDeck>
        </div>

    );
}
export default Home;