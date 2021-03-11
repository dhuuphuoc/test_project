import React from 'react'
import './RightSide.css'
import { Button } from 'react-bootstrap';

export default function RightSide({ menuHandler }) {
    return (
        <div className="right-side child child-right">
              <div className="mb-2">
                <a href="/tweet">
                    <Button variant="primary" size="lg">
                    Tweet
                    </Button>
                </a>
            </div>
        </div>
    )
}