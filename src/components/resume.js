import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import Mypic from '../assets/mypic.png'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'left'}}>
              <img src={Mypic} alt="avatar" 
              style={{height:'300px'}} />
            </div>
            <h2 style={{paddingTop: '1em'}}>Birendra Yadav</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Proficient in programming in C/C++ and other languages.
            </p>
            <p>Database languages: SQL, MongoDB</p>
            <h5>Address</h5>
            <p>Bhadohi, Uttar Pradesh, India</p>
            <h5>Phone</h5>
            <p>+91 9793900931</p>
            <h5>e-mail</h5>
            <p>birendra.yadav.met17@itbhu.ac.in</p>
            <h5>Website</h5>
            <p>https://infallible-brown-17b210.netlify.app/</p>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
            startYear={2012}
            endYear={2016}
            schoolName="Green View Public School, Bhadohi" 
            result="89%" />
            
            <Education 
            startYear={2017}
            endYear={2021}
            schoolName="IIT (BHU) VARANASI"
            result="CPI: 8.91" />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            
            <h2>Experience</h2>
            <Experience 
            startYear="May,2020"
            endYear="July,2020"
            jobName="Full Stack Web Development @ Udemy Bootcamp"
            jobDescription={
            <ul>
            <li> Developed a full Stack Yelpcamp's campground rating app.</li>
            <li> Users can create their own campgrounds, view and comment on others' campgrounds.</li>
            <li> Build Restful API for fetching information about various campgrounds and their comments.</li>
            <li> Key features of the application consist of signing up of a user, login and logout.</li>
            <li> Deployed the full application using Heroku.</li>
            </ul>
          }
            />

            <Experience
            startYear="Dec 2019"
            endYear="Jan 2020"
            jobName="Deep Learning Project @ CSE Dept. IIT(BHU) Varanasi."
            jobDescription={
              <ul>
               <li> Developed a Deep Learning Model to predict Primary to Secondary Protein Structure.</li>
               <li>Character level embedding of primary protein structure for encoding was used.</li>
               <li> CNN layer with max_pooling was used.</li>
               <li> BiLSTM layer with dropout of 0.5 was used.</li>
               <li> One Hot Encoding,Adam Optimizer and Binary_cross-entropy for accuracy was used.</li>
              </ul>
            }
            />
            <Experience
            startYear="Feb 2020"
            endYear="Mar 2020"
            jobName="Computer Vision Project @ Kaggle."
            jobDescription={
              <ul>
               <li> Developed a Deep Learning Model to classify Cancer whether it is benign or malignant.</li>
               <li> Transfer learning of EfficientNet model followed by average_pooling and dropout of 0.3 was used.</li>
               <li> Adam optimizer and Binary_cross-entropy for accuracy was used.</li>
               <li> Exposure: Transfer Learning,CNN,Tensorflow.</li>
              </ul>
            }
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>

            <h2>Skills</h2>
            <Skills skill="Javascript" progress={50}/>
            <Skills skill="HTML/CSS" progress={80}/>
            <Skills skill="NodeJS" progress={40}/>
            <Skills skill="ReactJS" progress={30}/>
            <Skills skill="Express" progress={34}/>
            <Skills skill="MongoDB" progress={25}/>
            <Skills skill="C/C++" progress={100}/>
            <Skills skill="Python" progress={55}/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
