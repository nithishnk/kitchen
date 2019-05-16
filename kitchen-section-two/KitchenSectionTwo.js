import React, { Component } from 'react'
import '../kitchen-section-two/kitchensectiontwo.css'
import kitchenthumb from '../../../../../wcconstruction-master/src/images/kitchentumb.jpg'

export default class KitchenSectionTwo extends Component {
state={
  data:[
    {heading:"Lorem ipsum", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
    {heading:"Lorem ipsum", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
  ]
}
  render() {
    return (
      <div className="bg-colr">
      <div className="p-5">
      <h1 className="text-center">Get Inspired</h1>
      <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      {this.state.data.map(description =>{ 
      return(
      <div className="row mx-5 pb-2">
      <div className="col-md-6 ">
      <img className="img-size float-left" src={kitchenthumb}></img>
      <h5 className="">{description.heading}</h5>
      <p>{description.content}</p>
      </div>
      <div className="col-md-6">
      <img className="img-size float-left" src={kitchenthumb}></img>
      <h5>{description.heading}</h5>
      <p>{description.content}</p>
      </div>
      </div>
     )}
     )}
    </div>
      
    )
  }
}
