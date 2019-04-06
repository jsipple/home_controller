import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Items.css'

class Returns extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // this would be accessiable by history so should grab the item from there
            <Fragment>
                <div>
                    {/* maybe add a dropdown here too */}
                    <h2>Reason for return</h2>
                    <br />
                    <textarea id="message" class="input-field"
                        placeholder="Enter your message here..."></textarea>    
                </div>
            </Fragment>
        )
    }
}
export default Returns