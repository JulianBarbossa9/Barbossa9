import React, {Fragment} from 'react';
import SectionTitle from './SectionTitle';
import PresentText from './PresentText';
import ButtonSectionHeader from './ButtonSectionHeader';
import ImageSectionAbout from '../assets/images/rokect.png'
import styled from 'styled-components';

const AboutSectinStyle = styled.div`
    padding:10rem 0 ;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }

    .aboutSection__left,
    .aboutSection__right {
        flex: 1;
    }
    .aboutSection__right{
        margin-left: 2rem;
    }
    .section_title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
    }

    @media only screen and (max-width:950px){
        .aboutSection__left{
            flex: 4;
        } 
        .aboutSection__right{
            flex:3;
        }
    }

    @media only screen and (max-width:768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right {
           width: 100%;
        }
        .aboutSection__right {
           margin-top: 2.5rem;
        }
        .section_title{
            text-align: center;
        }
        .aboutSection__buttons{
            flex-direction: column;
            margin-top: 1rem;
            gap:0;
        }
        .aboutSection__right{
            margin-left: 0;
        }
    }
`;

const AboutSection = () => {
    return ( 
        <Fragment>
            <AboutSectinStyle >
                <div className="container">
                    <div className="aboutSection__left">
                        <SectionTitle 
                            className="section_title"
                            subHeading="Let me introduce myself"
                            title="About me"
                        />
                        <PresentText mensaje="Multimedia Engineer with 
                            excellent teamwork skills, good communication, responsible and punctual with leadership skills and high sense of belonging, with a good knowledge in Object Oriented Programming and web development as well as knowledge in software development."
                        />

                        <div className="aboutSection__buttons">
                            <ButtonSectionHeader
                                btnLink="/proyects"
                                btnText="Works"
                            />
                            <ButtonSectionHeader
                                btnLink="/about"
                                btnText="Read More"
                                outline={true}
                            />
       
                        </div>

                    </div>
                    <div className="aboutSection__right">
                        <img src={ImageSectionAbout} alt="rockect" />
                    </div>
                </div>
            </AboutSectinStyle >
        </Fragment>
     );
}
 
export default AboutSection;