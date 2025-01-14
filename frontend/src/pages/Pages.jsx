import React, { Component } from 'react'
import Pagesbanner from '../components/pagesbanner'
import Pagescontent from '../components/pagescontent'

export class Pages extends Component {
    render() {
        return (
            <div>
                <Pagesbanner />
                <Pagescontent />
            </div>
        )
    }
}

export default Pages