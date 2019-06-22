import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../index.css';

class Footer extends Component {
    render() {
        return (
        	<div className="footer">
	        	<div className="footer-nav-section">
	            	<Link to={"/"}>
	                    <div className="footer-nav-item">
	                        Home
	                    </div>
	                </Link>
	                <Link to={"/about"}>
	                    <div className="footer-nav-item">
	                        About
	                    </div>
	                </Link>
	                <Link to={"/support"}>
	                    <div className="footer-nav-item">
	                        Support
	                    </div>
	                </Link>
	                <Link to={"/contact"}>
	                    <div className="footer-nav-item">
	                        Contact
	                    </div>
	                </Link>
	                
	                <a href="https://hayden.sh">
	                    <div className="footer-copyright">
	                    	© Hayden Woods 2019
	                    </div> 
	                </a> 
	                <i className="fa fa-copyright" aria-hidden="true"></i>         
				</div>
	        </div>
        );
    }
}

export default Footer;
