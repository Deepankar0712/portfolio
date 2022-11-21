import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import '../Projects/Projects.css'
import SingleProject from '../Projects/SingleProject/SingleProject';
import { UiData } from '../../data/uiData';

const UiProjects = () => {
    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.browny,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.darkbrowny1,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.darkbrowny,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.browny,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.tertiary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.darkbrowny}}>UI Designs</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {UiData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 

                        {UiData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/uiDesigns">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
  )
}

export default UiProjects