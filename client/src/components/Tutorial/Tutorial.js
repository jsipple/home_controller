import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Tutorial.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Tutorial extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                {/* i don't know if it should be here but we could talk about why people should do this idk */}
                    <h1>How to transform your home into a smart home</h1>                    <div>
                        <Container>
                            <Row>
                            <Col xs={6} ><iframe width="100%" height="315" src="https://www.youtube.com/embed/d8_xXNcGYgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                            <Col xs={6} ><iframe width="100%" height="315" src="https://www.youtube.com/embed/QO_Jlz1qpDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                        </Row>
                    </Container>
                        <h2>Additional product information</h2>
                        <ul id='docs'>
                            <li><a className='link' href='#'>FAQ</a></li>
                            <li><a className='link' href='#'>Documentation</a></li>
                            <li><a className='link' href='#'>Arduino coding guide</a></li>
                        </ul>
                    </div>
            </Fragment>
        )
    }
}
export default Tutorial