import React, { Component } from 'react'
import Kitchesectionone from '../kitchen/kitchen-section-one/KitchenSectionOne'
import Kitchensectiontwo from '../kitchen/kitchen-section-two/KitchenSectionTwo'

export default class Kitchen extends Component {
  render() {
    return (
      <div>
        <Kitchesectionone/>
        <Kitchensectiontwo/>
      </div>
    )
  }
}
