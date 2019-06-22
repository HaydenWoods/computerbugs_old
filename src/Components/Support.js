import React, { Component } from 'react';

import Header from "./Header.js";
import Footer from "./Footer.js";

import '../index.css';

class Support extends Component {
    render() {
        return (
            <div id="container">
            	<Header
                    title="ANY SOFTWARE NEEDED? FIND IT HERE."
                    subtitle=""
                    logo={true}
                />
            	
            	<div className="content">
                    <div className="content-break-invisible"></div>
                    <div className="content-box">
                        <div className="content-title left">Downloads</div>
                        <div className="download-item">
                            <div className="download-title">
                                TeamViewer
                            </div>
                            <a href="https://download.teamviewer.com/download/TeamViewerQS.exe">
                                <div className="download-button">
                                    <p className="download-button-text">Windows</p>
                                </div>
                            </a>
                            
                            <a href="https://download.teamviewer.com/download/TeamViewerQS.dmg">
                                <div className="download-button">
                                    <p className="download-button-text">Mac</p>
                                </div>
                            </a>
                        </div>
          
                        <div className="content-break-invisible"></div>
                    </div>
                </div>

            	<Footer/>
            </div>
        );
    }
}

export default Support;
