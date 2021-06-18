import React from 'react'
import Card from './Card'
import { Link } from "react-scroll";
const About = ({onTryNowClick}) => {
    return (
        <div className="about">
            <h2 className="about-heading" style={{color:'#564A4A'}}>About</h2>
            <div className="card-container">
                <Card 
                    cardTitle="Detect Leaf Disease" 
                    cardDes="Take a picture of your plant leaf and upload it. 
                             The app will analyze the leaf and will report you if your plant leaf is diseased
                             along with some curing practices for the same." 
                    onTryNowClick={onTryNowClick}      
                />
                <Card 
                    cardTitle="Check Soil Quality" 
                    cardDes="Take a picture of your soil and upload it. 
                             The app will analyze the soil and will report you if your soil is fertile or not.
                             ksbk cbsdbvkz kjsnfkjbzv snvkjb snvcckjznj jkdcbb dajc"
                    onTryNowClick={onTryNowClick} 
                />
                <Link to="newbie" smooth={true} duration={500}>
                <Card 
                    cardTitle="Newbie Gardener" 
                    cardDes="Plants are like people, but better hence they need to be cared better.
                             So if you're a newbie to the world of gardening. This section is the 
                             right place to kick-start your journey." 
                    onTryNowClick={onclick}         
                />
                </Link>
            </div>

        </div>
    )
}

export default About;