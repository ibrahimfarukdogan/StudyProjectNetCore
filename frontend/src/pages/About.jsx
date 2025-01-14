import React, { Component } from 'react' //rce kısa komut
import Consult from '../components/consult'
import Aboutbanner from '../components/aboutbanner'
import Aboutvision from '../components/aboutvision'
import Aboutprinciples from '../components/aboutprinciples'
import Abouthistory from '../components/abouthistory'
import Aboutteam from '../components/aboutteam'

export class About extends Component {
  render() {
    return (
      <div>
            <Aboutbanner />
            <Aboutvision />
            <Aboutprinciples />
            <Abouthistory />
            <Aboutteam />
            <Consult />
      </div>
    )
  }
}

export default About