import React, { Component } from 'react'
import Teambanner from '../components/teambanner'
import Teams from '../components/teams'

export class Team extends Component {
    render() {
        return (
            <div>
                <Teambanner />
                <Teams />
            </div>
        )
    }
}

export default Team