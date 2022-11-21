import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import a from '../../assets/png/a.png'
import { orangeThemeboy } from '../../theme/images';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.tertiary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.browny}}></div>
              <div className="style-circle" style={{backgroundColor: theme.browny}}></div>
              <div className="style-line" style={{backgroundColor: theme.browny}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.darkbrowny}}>{aboutData.title}</h2>
                    <p style={{color:theme.secondary}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src = {orangeThemeboy}
                        // src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
