import React,{ Fragment } from 'react';
import SectionTitle from './SectionTitle';
import ServiceComponent from './ServiceComponent';
import styled from 'styled-components';

const ServiceSectionStyle = styled.div`
    padding: 10rem 0;
    .sectionTitle{
        text-align: center;
    }

`;

const ServiceSection = () => {
    return (  
        <Fragment>
            <ServiceSectionStyle>
                <SectionTitle 
                    subHeading="What I will for you"
                    title="services"
                    className="sectionTitle"
                />

                <div className="services__allItems">
                    <ServiceComponent />
                    <ServiceComponent />
                    <ServiceComponent />
                </div>
            </ServiceSectionStyle>
        </Fragment>
    );
}
 
export default ServiceSection;