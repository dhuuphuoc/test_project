import React from 'react'
import './MainNav.css'
import { Button } from 'react-bootstrap';
import twitter from '../twitter.png'

export default function MainNav({ menuHandler }) {
    return (
        <div className="main-nav child child-left">
              <div className="mb-2">
                <a href="/" role="button"><img src={twitter} alt="Logo" width="30%" height="30%"/></a>
            </div>
        </div>
    )
}
