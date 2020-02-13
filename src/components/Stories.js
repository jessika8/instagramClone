import React from 'react'
import Ed from '../images/ed.png'
import Billie from '../images/billie.png'
import Lewis from '../images/lewis.png'
import Anthony from '../images/anthony.png'
import Aaron from '../images/aaron.png'


function Stories() {
    return (
        <div className="StoryImage">
            <div>
                <img src={Aaron} alt="Aaron" />
                <p>My Story</p>
            </div>
            <div >
                <img src={Ed} alt="Ed" />
                <p>edsheeran</p>
            </div>
            <div >
                <img src={Billie} alt="billie" />
                <p>billieeilish</p>
            </div>
            <div >
                <img src={Lewis} alt="lewis" />
                <p>lewiscapaldi</p>
            </div>
            <div >
                <img src={Anthony} alt="Anthony" />
                <p>anthonyjosh</p>
            </div>

        </div>
    )
}

export default Stories
