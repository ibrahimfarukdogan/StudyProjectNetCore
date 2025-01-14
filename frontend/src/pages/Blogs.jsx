import React, { Component } from 'react'
import Blogsbanner from '../components/blogsbanner'
import Blogscontent from '../components/blogscontent'

export class Blogs extends Component {
  render() {
    return (
      <div>
        <Blogsbanner />
        <Blogscontent />
      </div>
    )
  }
}

export default Blogs