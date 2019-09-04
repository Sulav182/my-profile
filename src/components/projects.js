import React, { Component } from 'react';
import ai from '../assets/ai.jpg';
import project from '../assets/project.jpg';
import ds from '../assets/ds.jpg';
import park from '../assets/park.jpg';
import web_crawler from '../assets/web-crawler.jpg';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,  CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import { deepStrictEqual } from 'assert';
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log('this is: '+(this)+ ' value '+JSON.stringify(e.target.value));
        window.location.href = e.target.value ;
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', paddingTop: '15px'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background:'url(https://hyperegio.eu/wp-content/uploads/2018/09/AI-and-robotics.jpg) center / cover'}}>
                            AI Report
                        </CardTitle>
                        <CardText>
                            This is the final report for the A.I course where my team wrote a program to teach chemistry to middle school students.
                        </CardText>
                        <CardActions border>
                            <Button colored value={"https://github.com/Sulav182/AI-in-Middle-School-Chemistry"} onClick={this.handleClick}>Github</Button>
            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                     {/*Project 2*/}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background:'url(http://cdn.interactivesearchmarketing.com/wp-content/uploads/2012/01/Web-Crawler.jpg) center / cover'}}>
                            Web Crawler Report
                        </CardTitle>
                        <CardText>
                            This is the project that I worked on as a student developer for R&D department of Texas Tech University.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/Sulav182/Website-Summary"} colored onClick={this.handleClick}>Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background:
                        'url(https://chestnuthillpa.com/wp-content/uploads/2015/08/Parking-arrow-right..jpg) center / cover'}}>
                            Senior Capstone Report
                        </CardTitle>
                        <CardText>
                            Final project where we built a prototype application that allows a user to find free parking spots in a parking lot.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/Sulav182/Senior-Capstone-Final-Report"} colored onClick={this.handleClick}>Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background:
                        'url(https://starkassault.files.wordpress.com/2015/06/430918.jpg) center / cover'}}>
                            Concept of Programming Language Projects
                        </CardTitle>
                        <CardText>
                            A simple interpreter built for 'Concept of Programming Language' course.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/Sulav182/Programming-Language-Projects"} colored onClick={this.handleClick}>Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/*Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background:
                        'url(https://jupitervidya.com/wp-content/uploads/2014/02/data-structures-training-bangalore-jupiter-vidya.jpg) center / cover'}}>
                            
                        </CardTitle>
                        <CardText>
                            Projects written in C language for the 'Data Structure' course.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/Sulav182/Data-Structure-Projects"} colored onClick={this.handleClick}>Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/*Project 5*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/1600/0*82whTlSM0uqVzOSe.jpg) center / cover'}}>
                            Database Systems
                        </CardTitle>
                        <CardText>
                            Final project for the database course. In this project, my team used a 'IMDB Movie Dataset' to query about the relation between a movie's rating and its oscar awards.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/DatabaseProjectTTU/DatabaseProjectTTU.github.io"} colored onClick={this.handleClick}>Github</Button>
                            <Button value = {"https://databaseprojectttu.github.io/"} colored onClick={this.handleClick}>Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className = "projects-grid">
                {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background:
                        'url(https://i.ebayimg.com/images/i/231949841778-0-1/s-l1000.jpg) center / cover'}}>
                            Java Brick Game
                        </CardTitle>
                        <CardText>
                            A simple brick game developed in java.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/Sulav182/Java_Brick-Game"} colored onClick={this.handleClick}>Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background:
                        'url(https://cdn-images-1.medium.com/max/1600/1*MNj7uq7HUNGERaYgRRdZfw.jpeg) center / cover'}}>
                            Java Face Detection
                        </CardTitle>
                        <CardText>
                            A face detecting app that uses OpenCV library.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://github.com/Sulav182/Java_Face-Detection"} colored onClick={this.handleClick}>Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>

            )
        }else if(this.state.activeTab === 2){
            return(
                <div className = "projects-grid">                  
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background:
                        'url(https://www.hopetutors.com/wp-content/uploads/2017/08/mern-stack-training.png) center / cover'}}>
                            MERN Stack
                        </CardTitle>
                        <CardText>
                            A shopping list application built using MERN stack.
                        </CardText>
                        <CardActions border>
                            <Button value = {"https://glacial-earth-12882.herokuapp.com/"} colored onClick={this.handleClick}>Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>School Projects and Reports</Tab>
                    <Tab>Java</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>
               
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

               
            </div>
        )
    }
}

export default Projects;