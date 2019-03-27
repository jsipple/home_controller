import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Tutorial.css'

class Tutorial extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                {/* i don't know if it should be here but we could talk about why people should do this idk */}
                    <h1>How to transform your home into a smart home</h1>
                    <div>Tutorials(probably just have videos here)</div>
                    <div>
                        <h2>Additional product information</h2>
                        <ul>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Documentation</a></li>
                            <li><a href='#'>Arduino coding guide</a></li>
                        </ul>
                    </div>
            </Fragment>
        )
    }
}
export default Tutorial