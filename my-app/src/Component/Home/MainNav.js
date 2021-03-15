import React from 'react'
import './MainNav.css'
import { Button, Row } from 'react-bootstrap';
import twitter from '../twitter.png'

export default function MainNav({ menuHandler }) {
    return (
        <Row className="nav-bar">
            <div className="row logo">
                <a href="/home"><img src={twitter} alt="Logo"/></a>
            </div>
            <div className="row tweet">
                <a href="/tweet">
                    <Button variant="primary" size="lg">
                    Tweet
                    </Button>
                </a>
            </div>
        </Row>
    )
}
