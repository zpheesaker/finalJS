import React from 'react'
import "./main.css"
import SimpleImageSlider from 'react-simple-image-slider'
import goalArr from './goalsImg'


function Goals() {
    return (
        <div>
            <SimpleImageSlider
                width={896}
                height={504}
                images={goalArr}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={4.0}
            />
        </div>

    );
}

export default Goals;