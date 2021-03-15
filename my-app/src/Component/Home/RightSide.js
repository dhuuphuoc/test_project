import React from 'react'
import './RightSide.css'
import { Button, Row } from 'react-bootstrap';

export default function RightSide({ menuHandler }) {
    return (
        <Row>
            <div className="right-side">
                <a href="/tweet">
                    <Button variant="primary" size="lg">
                    Tweet
                    </Button>
                </a>
            </div>
        </Row>
    )
}