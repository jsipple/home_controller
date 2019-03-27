import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Jumbotron.css'

class Jumbotron extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div class="jumbotron" id='jumbo'>
                    <h1 class="display-4">Get started turning your home into a smart home today!</h1>
                    <p class="lead">Smart home technology allows you to live a more comfortable and stress free life-style</p>
                    <hr class="my-4"/>
                    <p></p>
                    <p class="lead">
                    Smart home technology allows you to control virtually every electronic device in your home with just the touch of a button
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default Jumbotron