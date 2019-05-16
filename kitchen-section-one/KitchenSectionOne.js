import React, { Component } from 'react'
import '../kitchen-section-one/kitchensectionone.css'
import { Carousel } from 'react-bootstrap';
import kitchen1 from '../../../images/Kitchen1.png'
import kitchen2 from '../../../images/Kitchen1.png'
import kitchen3 from '../../../images/Kitchen1.png'
import background from '../../../images/nature.jpg'
import  slider1 from '../../../images/slider1.jpg'
import  slider2 from '../../../images/slider2.jpg'
import  slider3 from '../../../images/slider3.jpg'


export default class KitchenSectionOne extends Component {
  render() {
    return (
    
      <div className="row mx-0">

      <div className="background-img">
      <div className="row">
      <div className="col-md-6 col-sm-12">
      <div className="header-tag">
      <h1>Affordable,</h1>
      <h1>High-End</h1>
      <h1>Furniture</h1>
      <p>Lorem ipsum donec id elit at eget metus.Lorem ipsum donec id <br></br>elit at eget metus.Lorem ipsum donec id elit at eget metus.</p>
      </div>
      </div>
      <div className="col-md-6 col-sm-12">
      <div className="carsouel-img">
      <Carousel>
                <div>
                    <img className="carsouel-one" src={kitchen1} />
                    
                </div>
                <div>
                <img className="carsouel-one" src={kitchen1} />
                    
                </div>
                <div>
                <img className="carsouel-one" src={kitchen1} />
                    
                </div>
            </Carousel>
      </div>
      <div className="header-tag-two">
      <h1>What's </h1>
      <h1>New</h1>
      </div>
      
      </div>
      </div>
      </div>
      
      <div className="slider-padding">
                    <img className="slider1" src={slider1} />
                    
                </div>
                <div className="slider-padding">
                    <img className="slider3" src={slider3} />
                    
                </div>
                <div className="slider-padding">
                    <img className="slider1" src={slider1} />
                    
                </div>
                
                
      </div>

    )
  }
}
