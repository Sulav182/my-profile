import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>Sulav Poudyal</h2>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                            416 Loma Alta Dr, Flower Mound TX 75022
                        </p>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                            sulavpoudyal@hotmail.com
                        </p>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                            +1 318-450-9013
                        </p>
                    </Cell>
                   
                </Grid>
            </div>
        )
    }
}

export default Contact;