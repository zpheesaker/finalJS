import React from 'react'
import Header from './headerComp';
import Footer from './footerComp';

function Main (){
    return(
        <React.Fragment>
            <Header />
            <div>Hello World</div>
            <Footer />
        </React.Fragment>
        
    )
}

export default Main;