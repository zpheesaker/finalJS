import React from 'react'
import "./main.css"
import SimpleImageSlider from 'react-simple-image-slider'
import advArr from './advImg'


function Adventures() {
    return (
        <div class = "center">
            <SimpleImageSlider
                width={890}
                height={500}
                images={advArr}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={4.0}
            />
        </div>

    );
}

export default Adventures;