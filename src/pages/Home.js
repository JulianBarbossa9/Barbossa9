import React, { Fragment } from 'react';
import HeaderSection from '../components/HeaderSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const Home = () => {
    return (  
        <Fragment>
            <div>
                {/* <h1>This is a Home Page</h1> */}
                <HeaderSection />
                <AboutSection />
                <ServiceSection />
                <ProjectsSection />
                <ContactBanner />
                <Footer />
                
                
            </div>
        </Fragment>
    );
}
 
export default Home;