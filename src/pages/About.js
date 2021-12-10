import React, { Fragment} from 'react';
import Footer from '../components/Footer';
import PresentText from '../components/PresentText';
import AboutInfoItem from '../components/AboutInfoItem';
import ButtonSectionHeader from '../components/ButtonSectionHeader';
import AboutImage from '../assets/images/about-page-img.png';
import styled from 'styled-components';


const AboutSectionStyle = styled.div`
     padding: 20rem 0 10rem 0;
     .top-section{
         display:flex;
         align-items:center;
         justify-content:center;
         gap:2rem;
     }

     .left{
         flex: 3;
     }
     .right{
         flex: 2;
     }
     .about__subheading{
         margin-bottom: 2rem;
        font-size: 1rem;
        span{
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 9px;
        }
     }
     .about__heading{
         margin-bottom: 1.5rem;
     }
     .about__info{
         margin-bottom: 2rem;   
         .para{
             max-width:100%;
         }
     }
     .right {
         img{
             border: 2px solid var(--gray-1);
         }
     }
`;



const About = () => {
    return (  
        <Fragment>
            <AboutSectionStyle>
                <div className='container'>
                    <div className='top-section'>
                        <div className='left'>
                            <p className='about__subheading'>
                                Hi, I am <span>Julian Barbosa</span>
                            </p>
                            <h2 className='about__heading'>Multimedia Engineer</h2>
                            <div className='about__info'>
                                <PresentText 
                                    mensaje="I am from Bogotá Colombia at the university I studied Multimedia Engineer with excellent teamwork skills, good communication, responsible and very punctual with leadership skills and a high sense of belonging.

                                    Extensive knowledge in Front-End development and Scrum methodology in addition to good programming skills, also eager to continue learning and growing in the world of software development. "
                                />
                            </div>

                            <ButtonSectionHeader 
                                btnLink = "#"
                                btnText = "Dowload CV"

                            />
                        </div>
                        <div className='right'>
                            {/* <img src={AboutImage } alt="sb ima"/> */}
                        </div>
                    </div>

                    <div className='about__info_items'>
                        <div className='about__info__item'>
                            <h2 className='about__info__heading'>Education </h2>
                            <AboutInfoItem />
                        </div>
                    </div>
                </div>
            </AboutSectionStyle>
        </Fragment>
    );
}
 
export default About;