import React,{ Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const ScroollToTop = () => {

    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])

    return ( 
        <Fragment>
            {null}
        </Fragment>
     );
}
 
export default ScroollToTop;