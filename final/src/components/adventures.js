import React from 'react'
import "./main.css"
import SimpleImageSlider from 'react-simple-image-slider'
import advArr from './advImg'


function Adventures() {
    return (
        <div>
            <SimpleImageSlider
                width={896}
                height={504}
                images={advArr}
                showBullets={true}
                showNavs={true}
            />
        </div>

    );
}

export default Adventures;