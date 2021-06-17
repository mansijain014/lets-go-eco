import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Step from './Step'

const About = () => {
    return (
        <div className="about">
            <h2 className="about-heading" style={{color:'black'}}>About</h2>
            <div className="step-container">
                <Step icon="mobile-alt" stepNum="1" stepTitle="Click a Pic" stepDes="Take a Picture of your plant leaf" />
                <FontAwesomeIcon icon="chevron-right" className="icon arrow-icon"/>
                <Step icon="cloud-upload-alt" stepNum="2" stepTitle="Upload on Plant AI" stepDes="Visit Plant AI on your device and click on Try Now to upload your picture" />
                <FontAwesomeIcon icon="chevron-right" className="icon arrow-icon" />
                <Step icon="list" stepNum="3" stepTitle="Get final Report" stepDes="Plant AI will analyze your plant and will display a detailed report for you" />
            </div>

        </div>
    )
}

export default About;