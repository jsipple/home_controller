import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Categories.css'
import lock from './images/smart-lock.jpg'
import light from './images/light.jpeg'
import camera from './images/camera.jpg'
import temp from './images/temp.jpg'
import alexa from './images/alexa.jpg'

class Categories extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <section className='image'>
                    <a href='#'>
                    <img className='category' src={lock} />
                    </a>
                    <div className='caption'>locks</div>
                    </section>
                </div>
                {/* want to change this picture */}
                <div>
                    <section className='image'>
                    <a href='#'>
                    <img className='category' src={light} />
                    </a>
                    <div className='caption'>lights</div>
                    </section>
                </div>
                {/* need to get better picture */}
                <div>
                    <section className='image'>
                    <a href='#'>
                    <img className='category' src={camera} />
                    </a>
                    <div className='caption'>security cameras</div>
                    </section>
                </div>
                <div>
                    <section className='image'>
                    <a href='#'>
                    <img className='category' src={temp} />
                    </a>
                    <div className='caption'>temperature</div>
                    </section>
                </div>
                <div>
                    <section className='image'>
                    <a href='#'>
                    <img className='category' src={alexa} />
                    </a>
                    <div className='caption'>works with alexa</div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default Categories