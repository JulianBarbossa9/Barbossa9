import React, {Fragment} from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SectionTitle from './SectionTitle';
import ProjectItem from './ProjectItem';
import projects from '../assets/data/projects';

const ProjectsSection = () => {
    return (  
        <Fragment>
            <div>
                <div className="container">
                    <SectionTitle 
                        subHeading="Some of my recent works"
                        title="My proyects"
                        
                    />
                    <div className="projects__allItems">
                        <Swiper>
                            {projects.map((project, index) => {
                                if(index >= 5) return;
                                return(
                                    <ProjectItem />
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default ProjectsSection;