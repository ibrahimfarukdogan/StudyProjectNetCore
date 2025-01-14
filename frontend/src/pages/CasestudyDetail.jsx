import React, { Component } from 'react'
import Casestudydetails from '../components/casestudydetails'
import Casestudydetailmore from '../components/casestudydetailmore'

export class CasestudyDetail extends Component {
  render() {
    return (
      <div>
        <Casestudydetails />
        <Casestudydetailmore />
      </div>
    )
  }
}

export default CasestudyDetail