import React, { Fragment } from 'react';
import styled from 'styled-components';


const AboutItemStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    position: relative;
    .title{
        font-size:2rem;
    }
    .items {
        display:flex;
        gap: 1.5rem;
        position: absolute;
        left: 12rem;
        /* margin-left: 1.5rem; */
    }
    .item{
        background-color: var(--deep-dark);
        padding: 0.5rem;
        border-radius: 9px;
    }

  
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items{
            position: initial;
            gap: 1rem;
            /* left: 2rem; */
        }
        .title{
            font-size: 1.5rem;
        }
    }

    /* @media only screen and (max-width: 2626px) and (min-width:1580px){
        .items {
            left: 23rem;
            /* border: 2px solid red; */
            font-size: 1rem; 
            
        }
    } */
    
`;

const AboutInfoItem = ({title, items = ['HTML','CSS']}) => {
    
    
    return (  
        <Fragment>
            <AboutItemStyle>
                <h3 onClick="title">
                    {title}
                </h3>
                <div className='items'>
                    {items.map((item, index) => (
                        <div className='item' key={index}>
                            <p className='select__item'>{item}</p>
                        </div>
                    ))}
                </div>
            </AboutItemStyle>
        </Fragment>
    );
}
 
export default AboutInfoItem;