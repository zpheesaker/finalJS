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
            />
        </div> 

    );
}

export default Family;