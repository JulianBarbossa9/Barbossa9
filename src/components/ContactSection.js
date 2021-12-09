import React, { Fragment } from 'react';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md';


const ContactSectionStyle= styled.div`
    padding: 10rem 0;
    .sectionTitleee{
        text-align: center;
    }
`;

const ContactSection = () => {
    return (  
        <Fragment>
            <ContactSectionStyle>
                <div className="container">
                    <SectionTitle 
                        subHeading="Get in touch"
                        title="Contact"
                    />
                    <div className="contactSection__wrappper">
                        <div className="left">
                            <ContactInfoItem
                                icon={<MdLocalPhone />} 
                                text="+57 316 828 6189"
                            />
                            <ContactInfoItem
                                icon={<MdEmail/>}
                                text="julianbarbossa@hotmail.com"
                            />
                            <ContactInfoItem
                                icon={<MdPlace />} 
                                text="Bogotá, Colombia"
                            />
                        </div>
                        <div className="right">
                            Conctac form
                        </div>
                    </div>
                </div>
            </ContactSectionStyle>
        </Fragment>
    );
}
 
export default ContactSection;