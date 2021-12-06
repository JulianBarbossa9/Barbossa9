import React,{ Fragment } from 'react';
import SectionTitle from './SectionTitle';
import ServiceComponent from './ServiceComponent';
import styled from 'styled-components';
import { MdCode, MdSignalCellularAlt } from 'react-icons/md';
import { FiDatabase } from 'react-icons/fi'

const ServiceSectionStyle = styled.div`
    padding: 10rem 0;
    .sectionTitle{
        text-align: center;
        
    }
    .services__allItems{
        display: flex;
        gap:10rem;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .sectionTitleee{
        text-align: center;
    }
    @media only screen and (max-width:768px){
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 3rem; 
            gap: 4;
        }
    }

`;

const ServiceSection = () => {
    return (  
        <Fragment>
            <div className="container">
                <ServiceSectionStyle>
                    <SectionTitle 
                        subHeading="What I will for you"
                        title="services"
                        className="sectionTitle"
                    />

                    <div className="services__allItems">
                        <ServiceComponent 
                            icon={<MdSignalCellularAlt /> }
                            title="Data Science"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula dictumst fermentum imperdiet vitae dapibus, per varius ac porta volutpat aenean"
                        />
                        <ServiceComponent 
                            icon={<MdCode />}
                            title="Development Software"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula dictumst fermentum imperdiet vitae dapibus, per varius ac porta volutpat aenean"
                        />
                        <ServiceComponent 
                            icon={<FiDatabase />}
                            title="Data Bases"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis ultrices vehicula dictumst fermentum imperdiet vitae dapibus, per varius ac porta volutpat aenean"
                        />
                    </div>
                </ServiceSectionStyle>
            </div>
        </Fragment>
    );
}
 
export default ServiceSection;