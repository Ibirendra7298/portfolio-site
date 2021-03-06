import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Mypic from '../assets/mypic.png'

class Landing extends Component {
  constructor(props){
    super(props);
    console.log(window.innerWidth> window.innerHeight);
    this.state={
      headingStyle:{
        fontSize: window.innerHeight > window.innerWidth ? "10vw" : "10vh"
      }
    }
  }
  updateDimensions = () => {
    this.setState({
      headingStyle:{
        fontSize: window.innerHeight > window.innerWidth ? "10vw" : "10vh"
      } 
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Mypic}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
            <h1 style={this.state.headingStyle}>Full Stack Web Developer</h1>
              {/* <span style={{fontSize:'2vw'}}>Full Stack Web Developer</h1> */}

               <hr/>

               <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

               <div className="social-links">

                 {/*Linkedin */}
                 <a href="https://www.linkedin.com/in/birendra-yadav-344910169" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-linkedin-square"  aria-hidden="true" />
                 </a>

                 {/*github */}
                 <a href="https://github.com/Ibirendra7298" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-github-square"  aria-hidden="true" />
                 </a>

                 {/*freeCodeCamp */}
                 <a href="https://www.freecodecamp.org/birendrayadav" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                 </a>
               </div>
             </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing