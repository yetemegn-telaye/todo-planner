import React from 'react';
import { Card, CardText } from 'reactstrap';


const Footer = (props) => {
    return(
        
        <footer id="footer" className="light">
          
          <div className="main-footer light ">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>©Copyright DayPlanner 2019. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
}
export default Footer;