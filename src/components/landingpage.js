import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import pic from "../assets/headshot.png";
class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={pic}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr/>
                            <p>Javascript | Python | AWS</p>
                            <div className = "social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sulav-poudyal-aa634391/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/Sulav182" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;