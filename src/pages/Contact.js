import React, { Fragment } from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Contact = () => {
    return ( 
        <Fragment>  
            <div>
                <ContactSection />
                <Footer/>
            </div>
        </Fragment>
     );
}
 
export default Contact;