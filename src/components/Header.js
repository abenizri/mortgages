import React from 'react';
import Banner from './Banner'
import Nav from './navigastion/Nav'
import Footer from './Footer';

 
const Top = () => {

    return (       
        <React.Fragment>           
            <Banner/>
            <Nav/>
            <Footer/>
        </React.Fragment>       
            
    );
}

export default Top