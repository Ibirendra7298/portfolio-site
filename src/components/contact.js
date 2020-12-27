import React, { Component } from 'react'
import { Grid, Cell, List,ListItem, ListItemContent } from 'react-mdl'
import Mypic from '../assets/mypic.png'


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Birendra Yadav</h2>
            <img 
              src={Mypic}
              alt="avatar" style={{height:'250px'}}/>
            <p style={{width:'75%', margin:'auto' ,paddingTop:'1em', fontFamily: 'Pangolin', fontSize: '25px'}}>
            You can contact me for any freelance work related to web development. :)
            </p>
          </Cell>
          <Cell col={6}>
            <h2>
              Contact Me
            </h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  +91 9793900931
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  birendra.yadav.met17@itbhu.ac.in
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                  <i className="fa fa-skype" aria-hidden="true"/>
                  Birendra Yadav
                  </ListItemContent>
                </ListItem>
                
                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact