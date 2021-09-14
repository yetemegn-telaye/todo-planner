import React from 'react';
import { Card, CardText } from 'reactstrap';


const Footer = (props) => {
    return(
        
        <footer id="footer" className="footer-1 light">
          <div className="main-footer widgets-dark typo-dark">
            <div className="container footer-container">
              <div className="row justify-content-center ml-4">     
               
                <div className="col-12 col-xs-12 col-sm-6 col-md-3 m-3 align-self-center">
                  <div className="d-flex justify-content-between">
                  <a
                        class="btn btn-primary rounded-circle btn-floating"
                        style={{backgroundColor: "#3b5998"}}
                        href="#!"
                        role="button"
                        ><i class="fa fa-facebook"></i>
                    </a>
                    <a
                        class="btn btn-info rounded-circle btn-floating"
                        style={{backgroundColor: "#ac2bac"}}
                        href="#!"
                        role="button"
                        ><i class="fa fa-instagram"></i>
                    </a>
                 
                    <a
                        class="btn btn-primary rounded-circle btn-floating"
                        style={{backgroundColor: "#55acee"}}
                        href="#!"
                        role="button"
                        ><i class="fa fa-twitter"></i>
                    </a>
                    <a
                        class="btn btn-danger rounded-circle btn-floating"
                        style={{backgroundColor: "#dd4b39"}}
                        href="#!"
                        role="button"
                        ><i class="fa fa-google"></i>
                    </a>
                  </div>
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