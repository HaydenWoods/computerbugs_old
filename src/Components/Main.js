import React, { Component } from 'react';
import $ from 'jquery';

import Header from "./Header.js";
import Footer from "./Footer.js";

import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

$(document).ready(function () { 
	$(".info-more").click(function() {
		console.log("1");
		if ($(".info-box-hidden").css("display") === "none") {
			$(".info-box-hidden").slideDown(300);
			$(".info-more").text("Show less...");
		} else {
			$(".info-box-hidden").slideUp(300);
			$(".info-more").text("Show more...");
		}
	});
});

class Main extends Component {
    render() {
        return (
            <div id="container">
            	<Header title="COMPUTER BUGS" subtitle="We specialise in all computer problems." logo={true}/>

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

							<div className="info-box info-box-hidden">
		                        <FontAwesomeIcon icon="book" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Tuition
		                        </p>
		                        <p className="info-box-content">
		                            Learn how to use Windows, MacOS, Microsoft Office, MYOB, and more.
		                        </p>
		                    </div>
		             
		                    <div className="info-box info-box-hidden">
		                        <FontAwesomeIcon icon="wifi" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Website Creation
		                        </p>
		                        <p className="info-box-content">
		                            Build modern and responsive websites easily.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box info-box-hidden">
		                        <FontAwesomeIcon icon="user" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            Friendly Service
		                        </p>
		                        <p className="info-box-content">
		                            Friendly and helpful support provided by Nick Woods.
		                        </p>
		                    </div>
		                    
		                    <div className="info-box info-box-hidden">
		                        <FontAwesomeIcon icon="plus" className="info-box-icon"/>
		                        <p className="info-box-title">
		                            More
		                        </p>
		                        <p className="info-box-content">
		                            Enquire about a specific problem,<br/><br/>Call Nick Woods<br/>Mobile: 0414 601 150<br/>Phone: (08) 9276 6362
		                        </p>
		                    </div>    
		                    
		                    <div className="info-more">
		                        Show more...
		                    </div> 
		                </div>
		            </div>
		    	

			        <div className="content-break"></div>

		            <div className="content-box">
		                <h1 className="content-title">
		                    COMPUTER MAINTENANCE YOU CAN TRUST
		                </h1>
		                <p className="content-text">
		                    Computer Bugs is a family owned and operated onsite PC & Mac repair business, with over 30 years of experience supporting the Perth area and surrounding suburbs. We offer on-site computer support for homes and businesses, providing fast, friendly and cost effective support to a wide range of issues. With fixed time appointments, our punctuality and communication will impress.
		                </p>
		            </div>
		            
		            <div className="content-break"></div>
		            
		            <div className="content-box">
		                <h1 className="content-title">
		                    CONTACT US NOW
		                </h1>
		                <p className="content-text">
		                	Mobile: 0414 601 150<br />
		                    Phone: (08) 9276 6362<br />
		                    Email: <a href="mailto:computerbugs@aapt.net.au">computerbugs@aapt.net.au</a><br />
		                </p>
		            </div>
	            
	            	<div className="content-break-invisible"></div>
	            </div>

            	<Footer/>
            </div>
        );
    }
}

export default Main;
