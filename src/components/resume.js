import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
class Resume extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4} className="resume-left-col">
                        <div style = {{marginTop:'0px'}}>
                            <h2 style = {{paddingTop : '2em', marginTop:'0px'}}>Sulav Poudyal</h2>
                            <h5 style={{color:'grey'}}>
                            416 Loma Alta Dr, Flower Mound TX 75022
                            </h5>
                            <h5 style={{color:'grey'}}>
                                sulavpoudyal@hotmail.com
                            </h5>
                            <h5 style={{color:'grey'}}>
                                +1 318-450-9013
                            </h5>
                            
                        </div>
                   </Cell>
                   <Cell col={8} className="resume-right-col">
                       <h2>Education</h2>
                       <Education 
                            startYear={"Fall 2015"}
                            endYear = {"Fall 2017"}
                            schoolName = "Texas Tech University"
                            schoolDescription = "Bachelor of Science in Computer Science"
                       />
                        <Education 
                            startYear={"Fall 2014"}
                            endYear = {"Spring 2015"}
                            schoolName = "Richland Community College"
                            schoolDescription = "Associate in Science"
                       />
                       <Education 
                            startYear={"Fall 2013"}
                            endYear = {"Spring 2014"}
                            schoolName = "University of Louisiana Monroe"
                            schoolDescription = "Bachelor of Science in Computer Science"
                       />
                       <hr style={{borderTop:'3px solid white'}} />

                       <h2>Experience</h2>
                       <Experience
                            startYear={"Oct 2017"}
                            endYear = {"On Going"}
                            jobName = "Software Engineer, Standard Harvest" 
                            jobDescription1 = "Designed and built the sandbox environments for a server-less application using AWS Code Build, Code Commit and Code Pipeline."
                            jobDescription2 = "Secured the server-less application by specifying only the required policy on the roles in AWS Lambdas and in AWS S3 Buckets."
                            jobDescription3 = "Added checks while writing data to AWS RDS to prevent SQL and XSS injection."
                            jobDescription4 = "Implemented Lambda Edge along with AWS CloudFront for faster and user specific delivery of content."
                            jobDescription5 = "Improved the perfomance of server-less applications by tuning the memory, timeout interval and concurrency of AWS Lambda Functions."
                        />

                        <Experience
                            startYear={"Feb 2016"}
                            endYear = {"Oct 2017"}
                            jobName = "Student Developer, R&D Texas Tech University Library" 
                            jobDescription1 = "Designed and built a web crawler to crawl TTU Library database and generate a report"
                            jobDescription2 = "Implemented multiple web services to filter and search the report"
                            jobDescription3 = "Setup a Red Hat cluster of 6 machines and ran a web crawl using IBM BigInsights"
                        
                        />

                        <hr style={{borderTop:'3px solid white'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress = {70}
                        />
                        <Skills 
                            skill="AWS"
                            progress = {65}
                        />
                        <Skills 
                            skill="Python"
                            progress = {60}
                        />
                    </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;