import React, { Component } from 'react'
import Servicesdetailbanner from '../components/servicesdetailbanner'
import Servicesdetails from '../components/servicesdetails'
import Servicesdetailwork from '../components/servicesdetailwork'
import Servicesdetailvision from '../components/servicesdetailvision'
import Servicesdetailcontact from '../components/servicesdetailcontact'
import Servicesdetailquestion from '../components/servicesdetailquestion'

export class ServicesDetail extends Component {
  render() {
    return (
      <div>
            <Servicesdetailbanner />
            <Servicesdetails />
            <Servicesdetailwork />
            <Servicesdetailvision />
            <Servicesdetailcontact />
            <Servicesdetailquestion />
      </div>
    )
  }
}

export default ServicesDetail