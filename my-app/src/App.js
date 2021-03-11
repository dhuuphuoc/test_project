// import {ChatEngine} from 'react-chat-engine';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import MainContent from './Component/Home/MainContent'
import MainNav from './Component/Home/MainNav'
import RightSide from './Component/Home/RightSide'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

export default function App(){
    const [sideNavDisplay, setSideNavDisplay] = useState(true);

    function toggleSiveNav(e) {
        e.preventDefault();
        setSideNavDisplay(!sideNavDisplay);
    }

    return(
        <BrowserRouter>
            <div className="main-container">
                <MainNav menuHandler={toggleSiveNav} />
                <div className="top-warapper child child-top">
                        {/* <div className="mb-2">
                            <a href="/" role="button" className="main-page">Trang chủ</a>
                        </div> */}
                    <h2><a href="/">Trang chủ</a></h2>
                </div>
                <div className="bottom-wrapper child child-middle">
                    <MainContent/>
                </div>
                <div className="bottom-wrapper child child-bottom">
                    Footer
                </div>
                <RightSide/>
            </div>
        </BrowserRouter>
    )
}