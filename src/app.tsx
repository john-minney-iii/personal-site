import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// Views
import LandingView from "./views/landing-view";
import MissingView from "./views/missing-view";

// Components
import Navbar from "./components/navbar";

const App : React.FunctionComponent = () => {
    const [currentTab, setCurrentTab] = useState<string>("about");

    // =========================================================
    return <>
        <BrowserRouter>
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div style={{ height: "100vh", width: "100vw" }}>
                <Routes>
                    <Route path="/" element={<LandingView />} />
                    <Route path="*" element={<MissingView />} />
                </Routes>
            </div>
        </BrowserRouter>
    </>;
};

export default App;
