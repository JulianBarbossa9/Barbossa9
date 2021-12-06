import React, { Fragment } from 'react';
import { MdDesktopMac } from 'react-icons/md';
import PresentText from './PresentText';
import styled from 'styled-components';


const ItemStyled = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
            width: 2.5rem;
        }
    }
    .sevicesItem__title{
        font-size: 1.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para{
        margin-top: 1.5rem;
    }
`;

const ServiceComponent = () => {
    return (   
       <Fragment>
            <ItemStyled>
                <div className="servicesItem__icon">
                    <MdDesktopMac />
                    <div className="sevicesItem__title">
                        Data Science
                    </div>
                    <PresentText 
                        mensaje="Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula dictumst fermentum imperdiet vitae dapibus, per varius ac porta volutpat aenean. Tincidunt vitae facilisis elementum congue laoreet hac malesuada pellentesque imperdiet sociosqu, tempor sodales nam platea montes augue posuere sed mus inceptos lacus."
                        
                    />
                    
                </div>
            </ItemStyled>
       </Fragment>
    );
}
 
export default ServiceComponent;