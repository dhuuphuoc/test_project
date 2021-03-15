// import {ChatEngine} from 'react-chat-engine';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import MainContent from './Component/Home/MainContent'
import MainNav from './Component/Home/MainNav'
import RightSide from './Component/Home/RightSide'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col} from 'react-bootstrap'
import './App.css';

export default function App(){
    const [sideNavDisplay, setSideNavDisplay] = useState(true);

    function toggleSiveNav(e) {
        e.preventDefault();
        setSideNavDisplay(!sideNavDisplay);
    }

    return(
        <BrowserRouter>
            <Container>
                <Row>
                    <Col xs lg="4">
                        <MainNav menuHandler={toggleSiveNav} />
                    </Col>
                    <Col xs lg="4">
                        <Row><h2><a href="/">Trang chủ</a></h2></Row>
                        <MainContent/>
                    </Col>
                    <Col xs lg="4">
                        <RightSide/>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    )
}