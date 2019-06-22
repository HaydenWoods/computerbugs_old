import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    render() {
        return (
        	<div id="header">
        		<div className="nav-section">
        			<Link to={"/"}>
	                    <div className="nav-item">
	                        Home
	                    </div>
	                </Link>
	                <Link to={"/about"}>
	                    <div className="nav-item">
	                        About
	                    </div>
	                </Link>
	                <Link to={"/support"}>
	                    <div className="nav-item">
	                        Support
	                    </div>
	                </Link>
	                <Link to={"/contact"}>
	                    <div className="nav-item">
	                        Contact
	                    </div>
	                </Link>

	                <div className="contact-section">
	                    <FontAwesomeIcon icon="phone" className="phone-icon"/>
	                    <div className="contact-info">
	                        0414 601 150
	                    </div>
	                </div>
	        	</div>

	        	<div className="content-break-invisible"></div>
	        	{ this.props.logo &&
	        		<FontAwesomeIcon icon="bug" className="header-icon"/>
	        	}
           		<h1 className="banner-title">
                	{ this.props.title }
	            </h1>
	            <h1 className="banner-subtitle">
	                { this.props.subtitle }
	            </h1>
        	</div>  
        );
    }
}

export default Header;
