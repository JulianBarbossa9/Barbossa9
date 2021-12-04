import React, { Fragment } from 'react';
import HeaderSection from '../components/HeaderSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
    return (  
        <Fragment>
            <div>
                {/* <h1>This is a Home Page</h1> */}
                <HeaderSection/>
                <AboutSection></AboutSection>
            </div>
        </Fragment>
    );
}
 
export default Home;