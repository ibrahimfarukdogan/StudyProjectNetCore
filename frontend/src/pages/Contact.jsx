import React, { Component } from 'react'
import Contactbanner from '../components/contactbanner'
import Contacttalk from '../components/contacttalk'
import Contacts from '../components/contact'

export class Contact extends Component {
  render() {
    return (
      <div>
            <Contactbanner />
            <Contacttalk />
            <Contacts />
      </div>
    )
  }
}

export default Contact