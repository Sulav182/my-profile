import React, { Component } from 'react';
import maybe from "../assets/maybe.jpg";
class About extends Component{
    render(){
        return(
            <div style = {{marginLeft:'10px'}}>
                <h4>About Me</h4>
                <p>How about scheduling a job interview for it :)</p>
                <img src={maybe} />
                
            </div>
        )
    }
}

export default About;