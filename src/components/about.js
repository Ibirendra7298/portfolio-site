import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class About extends Component {
  constructor(props){
    super(props);
    console.log(window.innerWidth> window.innerHeight);
    this.state={
      headingStyle:{
        fontSize: window.innerHeight > window.innerWidth ? "5vw" : "5vh"
      }
    }
  }
  updateDimensions = () => {
    this.setState({
      headingStyle:{
        fontSize: window.innerHeight > window.innerWidth ? "5vw" : "5vh"
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
      <div style={{width:'100%',margin:'auto'}}>
        {/* <div className="row">
          <div className="col-md-4 offset-md-6">
            <div className="row">Who Am I?</div>
            <div className="row">
              <p style={this.state.headingStyle}>
                I am currently pursuing my Bachelor's Degree in Engineering from IIT(BHU) Varanasi. I've done projects on Web Development Deep Learning and Machine learning.
                I enjoy web development,playing with data and my unequivocal love for making things and problem solving. If not studying, you'll find me playing cricket, lost in music.
              </p>
            </div>
          </div>
        </div> */}
        <Grid className="about-grid">
          {/* <Cell offset={2}>
            <div className="about-img">
            </div>
          </Cell> */}
          <Cell col={10} offsetDesktop={2} offsetTablet={1}>
            <h2 style={{fontFamily:"Langar"}}>Who Am I ?</h2>
            <div className="about-box">
              <p style={this.state.headingStyle}>I am currently pursuing my Bachelor's Degree in Engineering from IIT(BHU) Varanasi. I've done projects on Web Development Deep Learning and Machine learning.
              I enjoy web development,playing with data and my unequivocal love for making things and problem solving. If not studying, you'll find me playing cricket, lost in music.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About