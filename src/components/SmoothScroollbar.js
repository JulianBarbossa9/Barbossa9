import React, { Fragment, useRef } from 'react';
// import { Scrollbar } from 'swiper';
import ScrollBar from 'react-smooth-scrollbar';

const SmoothScroollbar = ({children}) => {

    const ref = useRef(null);

    return (  
        <Fragment>
            <ScrollBar
                ref={ref}
                damping=".09"
            >
                {children}
            </ScrollBar>
        </Fragment>

    );
}
 
export default SmoothScroollbar;