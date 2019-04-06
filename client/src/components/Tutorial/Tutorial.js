import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Tutorial.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class Tutorial extends Component {

    render() {
        return (
            <Fragment>
                {/* i don't know if it should be here but we could talk about why people should do this idk */}
                    <h1>How to transform your home into a smart home</h1>                    <div>
                        <Container>
                            <Row>
                            <Col xs={6} ><iframe title='tutorial' width="100%" height="315" src="https://www.youtube.com/embed/d8_xXNcGYgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                            <Col xs={6} ><iframe title='tutorial2' width="100%" height="315" src="https://www.youtube.com/embed/QO_Jlz1qpDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                        </Row>
                    </Container>
                        <h2>Additional product information</h2>
                        <ul id='docs'>
                            <li><Link className='link' to='/home'>FAQ</Link></li>
                            <li><Link className='link' to='/home'>Documentation</Link></li>
                            <li><Link className='link' to='/home'>Arduino coding guide</Link></li>
                        </ul>
                    </div>
            </Fragment>
        )
    }
}
export default Tutorial