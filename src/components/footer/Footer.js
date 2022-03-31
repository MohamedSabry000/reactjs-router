import React from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h4> Brand Name </h4>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <h3> Contact </h3>
              <ul>
                <li>
                  <a className="email" href="mailto:www.mohamedfadah123@gmail.com">
                    www.mohamedfadah123@gmail.com
                  </a>
                </li>
                <br />
              </ul>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <ul>
              <li>
                  <h5>
                    <NavItem style={{marginTop: "5em"}}>
                        <Link to='/home'>Home</Link>
                    </NavItem>
                  </h5>
                </li>
                <li>
                  <h5>
                    <NavItem>
                        <Link to='/about'>About</Link>
                    </NavItem>
                  </h5>
                </li>
                <li>
                  <h5>
                    <NavItem>
                        <Link to='/contact'>Contact</Link>
                    </NavItem>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="pull-left copyright">
              
              Copyright © Footer 20222. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
