import React from 'react';
import { Card, CardText } from 'reactstrap';


const Footer = (props) => {
    return(
        
        <footer id="footer" className="footer-1 light">
          <div className="main-footer widgets-dark typo-dark">
            <div className="container footer-container">
              <div className="row justify-content-center ml-4">     
               
                <div className="col-12 col-xs-12 col-sm-6 col-md-3 m-4">
                  
                    <a href="#"> <i className="fa fa-facebook"> </i> </a>
                    <a href="#"> <i className="fa fa-twitter"> </i> </a>
                    <a href="#"> <i className="fa fa-youtube"> </i> </a>
                    <a href="#"> <i className="fa fa-instagram"> </i> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
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