
import React from 'react'
import Direct from './Direct'

export default function Header(props) {
    return (
        <div className="mainHeader">
            <ion-icon className="headerIcon" name="camera-outline"></ion-icon>
            <h3>Instagram</h3>
    <ion-icon className="headerIcon" onClick={<Direct/>} name="paper-plane-outline" ></ion-icon>
        </div>
    )
}
