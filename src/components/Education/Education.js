import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'
import eduimg from '../../assets/png/brown chair.png'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.tertiary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.darkbrowny}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            score={edu.score}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
