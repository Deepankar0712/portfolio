import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import expimg from '../../assets/png/brown chair 2.png'

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.tertiary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={expimg} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.darkbrowny}}>Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience
