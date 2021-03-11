// import {ChatEngine} from 'react-chat-engine';
import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import MainContent from './Component/Home/MainContent'
import MainNav from './Component/Home/MainNav'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// const App = () =>{
//     return (
//         <ChatEngine
//             height="100vh"
//             projectID="1b1e1678-8e7e-4e2f-bc89-b72480e6c015"
//             userName="phuocdh"
//             userSecret="huuphuoc97it"
//         />
//     );
// }

// export default App;

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
                <div className="bottom-wrapper">
                    <MainContent/>
                </div>
            </div>
        </BrowserRouter>
    )
}