import React, { Component } from 'react'
import Servicesbanner from '../components/servicesbanner'
import Servicess from '../components/services'
import Servicesconsulting from '../components/servicesconsulting'
import Servicespricing from '../components/servicespricing'
import Contact from '../components/contact'

export class Services extends Component {
    render() {
        return (
            <div>
                <Servicesbanner />
                <Servicess />
                <Servicesconsulting />
                <Servicespricing />
                <Contact />
            </div>
        )
    }
}

export default Services