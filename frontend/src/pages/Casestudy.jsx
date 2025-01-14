import React, { Component } from 'react'
import Contact from '../components/contact'
import Casestudybanner from '../components/casestudybanner'
import Casestudies from '../components/casestudies'

export class Casestudy extends Component {
  render() {
    return (
      <div>
        <Casestudybanner />
        <Casestudies />
        <Contact />
      </div>
    )
  }
}

export default Casestudy