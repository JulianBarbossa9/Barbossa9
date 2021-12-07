import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import projectImage from '../assets/images/projectImg.png';
import styled from 'styled-components';


const ProjectItemStyle = styled.div`
    .projectItem__img{
        width: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }
    .projectItem__info{
        margin-top: 0.5rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius:12px;
    }
    .projectItem__title{
        font-size: 1.5rem;
    }
    .projectItem__descrip{
        font-size: 0.5rem;
    }
`;

const ProjectItem = () => {
    return (  
        <Fragment>
            <ProjectItemStyle>
            <Link to="/projects" className="projectItem__img">
                <img src={projectImage} alt="project img"/>
            </Link>
            <div className="projectItem__info">
                <Link to="/#">
                    <h3 className="projectItem__title">
                        proyecto 1
                    </h3>
                </Link>
                <p className="projectItem__descrip">
                    Reprehenderit non culpa fugiat aute consectetur. Duis magna ut quis tempor fugiat consequat. Aute aliquip adipisicing pariatur id exercitation magna in enim adipisicing irure.
                </p>
            </div>
            </ProjectItemStyle>
        </Fragment>
    );
}
 
export default ProjectItem;