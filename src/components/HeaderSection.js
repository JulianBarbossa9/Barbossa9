import React,{Fragment} from 'react';
import HeroImage from '../assets/images/hero.png';
import ButtonSectionHeader from './ButtonSectionHeader';
import PresentText from './PresentText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';



const HeaderStyle = styled.div`
    .hero{
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        position: relative;
        /* margin-top: 0.5rem; */

    }
    .hero__heading{
        font-size: 1rem;
        margin-bottom: -2.5rem;
        position: relative;
        margin-top: 2.2rem;
        .hero_salu{
            margin-top: 1.5rem;
        }
        span {
            display: inline-block;
            width: 100%;
        }
        .hero__name{
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-family:'Montserrat SemiBold' ;
            color:var(--white);
        }
    }
    .hero__image{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info{
        margin-top: -8rem;
    }
    .hero__socials,
    .hero__scrollDown{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        bottom:200px;
        width: 50px;
    }
`;
const HeaderSection = () => {
    return (  
        <Fragment>
            <HeaderStyle>
                <div className="hero">
                    <div className="container">
                        <h1 className="hero__heading">
                            <span className="hero_salu"> Hello, This is</span>
                            <span className="hero__name"> Julian Barbosa </span>
                        </h1>
                        <div className="hero__image">
                            <img src={HeroImage} alt="fotoJulianB"/>
                        </div>
                        <div className="hero__info">
                            <PresentText 
                                mensaje="Hello everyone out there, I am a person quite curious in what has to do with technology especially with software development and programming."
                            />
                            <ButtonSectionHeader
                                btnLink="/proyects"
                                btnText="See my Works"
                                outline={false}
                            />
                        </div>

                        <div className="hero__socials">
                            <div className="her_social_indicator">
                                <p>Follow</p>
                                {/* <img src={SocialMediaArrow} alt="Social Media"/> */}
                            </div>

                            <div className="hero__social_text">
                                <ul>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" rel="noreferrer" target="_blank" >LI</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" target="_blank" rel="noreferrer">INS</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" target="_blank" rel="noreferrer">GIT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="hero__scrollDown">
                            <p>Scroll</p>
                            {/* <img src={ScrollDownArrow} alt="scroll"/> */}
                        </div>
                    </div>
                </div>
            </HeaderStyle>
        </Fragment>
    );
}
 
export default HeaderSection;