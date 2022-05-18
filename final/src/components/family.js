import React from 'react'
import "./main.css"
import SimpleImageSlider from 'react-simple-image-slider'
import famArr from './familyImg'


function Family() {
    return (
        <div>
            <SimpleImageSlider
            width={896}
            height={504}
            images={famArr}
            showBullets = {true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={4.0}
            />
        </div> 

    );
}

export default Family;