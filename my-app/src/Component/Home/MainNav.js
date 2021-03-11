import React from 'react'
import './MainNav.css'
import { Button } from 'react-bootstrap';

export default function MainNav({ menuHandler }) {
    return (
        <nav className="main-nav">
            {/* <ul>
                <li><a href="/" className="material-icons md-24"><Button variant="primary">Home</Button>{' '}</a></li>
                <li><a href="/tweet" className="material-icons md-24"><button>Tweet</button></a></li>
            </ul> */}
              <div className="mb-2">
                <a href="/">
                    <Button variant="primary" size="lg">
                    Home
                    </Button>{' '}
                </a>
                <a href="/tweet">
                    <Button variant="danger" size="lg">
                    Tweet
                    </Button>
                </a>
            </div>
        </nav>
    )
}
