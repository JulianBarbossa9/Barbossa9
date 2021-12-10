import React, { Fragment } from 'react';
import PresentText from './PresentText';
import styled from 'styled-components';


const AboutItemStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
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
                            <p className=''>{item}</p>
                        </div>
                    ))}
                </div>
            </AboutItemStyle>
        </Fragment>
    );
}
 
export default AboutInfoItem;