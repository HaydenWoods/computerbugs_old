import React, { Component } from 'react';

import Header from "./Header.js";
import Footer from "./Footer.js";

import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {
    render() {
        return (
            <div id="container">
            	<Header 
            		title="GOT A COMPUTER BUG? CALL US." 
            		subtitle="We specialise in all computer problems."
            		logo={true}
            	/>

            	<div className="content">
		            <div className="info-section">
		                <div className="info-section-section">
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="bug" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Virus Removal
		                        </p>
		                        <p className="info-box-content">
		                            Anti-virus installation, configuration and updates. Malware removal and recovery from destructive viruses.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="wrench" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Upgrades
		                        </p>
		                        <p className="info-box-content">
		                            System upgrades including SSD and additional memory installation.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="book" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            New Systems
		                        </p>
		                        <p className="info-box-content">
		                            Prebuilt and custom built solutions for all purposes. Affordable and powerful computer builds.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="desktop" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Troubleshooting
		                        </p>
		                        <p className="info-box-content">
		                            Fix system error messages, slow internet, printer issues, slow startup, no sound, etc.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="book" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Tuition
		                        </p>
		                        <p className="info-box-content">
		                            Learn how to use Windows, MacOS, Microsoft Office, MYOB, and more.
		                        </p>
		                    </div>
		             
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="wifi" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Website Creation
		                        </p>
		                        <p className="info-box-content">
		                            Build modern and responsive websites easily.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="user" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Friendly Service
		                        </p>
		                        <p className="info-box-content">
		                            Friendly and helpful support provided by Nick Woods.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box">
		                        <FontAwesomeIcon icon="plus" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            More
		                        </p>
		                        <p className="info-box-content">
		                            Enquire about a specific problem,<br/><br/>Call Nick Woods<br/>Mobile: 0414 601 150<br/>Phone: (08) 9276 6362
		                        </p>
		                    </div>    
		                </div>
		            </div>
		            <div className="content-break-invisible"></div>
		        </div>

            	<Footer/>
            </div>
        );
    }
}

export default About;
