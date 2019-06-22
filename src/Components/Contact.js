import React, { Component } from 'react';

import Header from "./Header.js";
import Footer from "./Footer.js";

import '../index.css';

class Contact extends Component {
    render() {
        return (
            <div id="container">
            	<Header
                    title="GOT A COMPUTER BUG? CALL US."
                    subtitle="We specialise in all computer problems."
                    logo={true}
                />
            	
            	<div class="content">
                    <div class="content-break-invisible"></div>

                    <div class="content-box">
                        <h1 class="content-title">
                            CONTACT US NOW
                        </h1>
                        <p class="content-text">
                            Mobile: 0414 601 150<br />
                            Phone: (08) 9276 6362<br />
                            Email: <a href="mailto:computerbugs99@aapt.net.au">computerbugs@aapt.net.au</a><br />
                        </p>
                    </div>
                    
                    <div class="content-break"></div>
                    
                    <iframe title="Google Map" frameborder="0" src="https://maps.google.com/maps?q=22%20hustler%20st&t=&z=17&ie=UTF8&iwloc=&output=embed" class="content-map" allowfullscreen></iframe>
                    <div class="content-break-invisible"></div>
                </div>

            	<Footer/>
            </div>
        );
    }
}

export default Contact;
