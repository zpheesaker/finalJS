import React from 'react'
import Header from './headerComp';
import Footer from './footerComp';
import Home from './homeComp';
import About from './aboutComp';

function Main (){
    return(
        <React.Fragment>
            <Header />
            <Home/>
            <About/>
            <Footer />
        </React.Fragment>
        
    )
}

export default Main;