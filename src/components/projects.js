import React, { Component } from 'react'
import { Tabs,Tab, Cell ,Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import DeeplearningImg from '../assets/deeplearningimg.jpg'
import Computervision from '../assets/computervision.jpg'
import Timeseries from '../assets/timeseries.png'
import WD from '../assets/webdevelopment.jpeg'

class Projects extends Component {
  constructor(props)
  {
    super(props);
    this.state={ activeTab: 0};
  }
  toggleCategories(){
    if(this.state.activeTab === 0)
    {
      return(
        <div className="project-grid">
          <div className="row">
          {/* PROJECT#1 */}
          <div className="col-md-6" style={{padding:"auto",marginBottom:'10px'}}>
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px', background:
          'url('+DeeplearningImg+') center/cover'}}
          >DeepPrime2Sec</CardTitle>
          <CardText>
            Primary Protein Structure to Secondary Protein Structure Prediction using Deep Learning Model like CNN,BiLSTM
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/Ibirendra7298/DeepPrime2Secondary">Github</Button>

          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
    


        {/*PROJECT #2*/}
        <div className="col-md-6" style={{padding:"auto",marginBottom:'10px'}}>
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px', background:
          'url('+Computervision+') center/cover'}}
          >Computer Vision Project</CardTitle>
          <CardText>
            Computer Vision project to classify cancer whether it is malignent or benign using transfer learning of EfficientNet Model

          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/Ibirendra7298/SIIM-ISIC-Melanoma-Classification">Github</Button>

          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>         
        </div>         
        </div>         
      )
    }
    else if(this.state.activeTab === 1)
    {
      return(
        <div className="project-grid">

          {/* PROJECT#1 */}
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#000000' , height:'176px', background:
          'url('+Timeseries+') center/cover'}}
          >Time seies Forcasting Project</CardTitle>
          <CardText style={{fontSize:'15px'}}>
            Time series forcasting of traffic of Jetrail using ARIMA model
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/Ibirendra7298/Time-Series-Forcasting">Github</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        </div>

      )
    }
    else if(this.state.activeTab === 2)
    {
      return(
        <div className="project-grid">

          {/* PROJECT#1 */}
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff ' , height:'176px', background:
          'url('+WD+') center/cover'}}
          >YelpCamp</CardTitle>
          <CardText style={{fontSize:'15px'}}>
          Develop a web app using HTML CSS Javascript Nodejs Express MongoDB.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/Ibirendra7298/Yelpcamp-">Github</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
      )
    }       
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} 
        onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
          <Tab>Deep Learning</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Web Development</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">
              {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div>
      
    )
  }
}

export default Projects
