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
        margin-top: 1.5rem;

    }
    .hero_social_text{
        ul{
                li{
                    margin-bottom:1rem ;
                }
                a{
                    display: inline-block;
                    font-size: 0.8rem;
                    transform: rotate(-90deg);
                    /* letter-spacing: 5px; */
                    letter-spacing: 3px;
                    margin-bottom: 1rem;
                }
            }
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
        max-width: 800px;
        width: 100%;
        height: 650px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info{
        margin-top: -8rem;
    }
    .hero__social,
    .hero__scrollDown{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        bottom:200px;
        width: 50px;
        
    }
    .hero__social{
        left: 50px;
        
    }
    .hero__scrollDown{
        right: 50px;
        margin-right: 10px;
        
    }
    .hero_social_indicator,
    .hero__scrollDown{
        width: 50px;
        p{
            font-size: 0.5rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 5px;
            text-transform: uppercase;
            
        }
        img{
            max-height: 120px;
            width: 15px;
            margin: 0 auto;
            object-fit: contain;
          
        }
        .hero__srollDown{
            img{
                max-height: 90px;
            }
        }

    }
    @media only screen and (max-width:768px){
        .hero{
            min-height: 750px;
        }
        .hero__heading{
            font-size: 0.5rem;
            margin-bottom: -2rem;

            .hero__name{
                font-size: 2rem;
            }
        }
        .hero__image{
            height: 300px;
        }
        .hero__info{
            margin-top: 1rem;
        }
        .hero__social{
            left: 0px;
            bottom: 15%;
            width: 20px;
            .hero_social_indicator{
                width: 20px;
                p{
                    font-size: 0.3rem;
                }
                img {
                    max-height: 22px;
                }
            }
        }
        .hero_social_text{
            ul{
                li{
                    a{
                        font-size: 0.3rem;
                        margin-bottom: 1rem;
                        letter-spacing: 2px;
                    }
                }
            }
        }
        .hero__scrollDown {
            right: 0;
            width: 10px;
            gap:1.3rem;
            p{
                font-size: 0.3rem;
            }
        }
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

                        <div className="hero__social">
                            <div className="hero_social_indicator">
                                <p>Follow</p>
                                <img src={SocialMediaArrow} alt="Social Media"/>
                            </div>

                            <div className="hero_social_text">
                                <ul>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" rel="noreferrer" target="_blank" 
                                           
                                        >LI</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" target="_blank" rel="noreferrer">IG</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" target="_blank" rel="noreferrer">GIT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="hero__scrollDown">
                            <p>Scroll</p>
                            <img src={ScrollDownArrow} alt="scroll"/>
                        </div>
                    </div>
                </div>
            </HeaderStyle>
        </Fragment>
    );
}
 
export default HeaderSection;