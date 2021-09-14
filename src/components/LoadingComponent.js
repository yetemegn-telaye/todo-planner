import React from 'react';
import {Row, Col} from 'reactstrap';


const Loading = (props)=>{
    return(
        <div className="container">
            <Row>
                <Col>
                    <span className="fa fa-spinner fa-3x" color="primary"></span>
                    <p>Loading ...</p>
                </Col>
            </Row>
        </div>
    );
}
export default Loading;