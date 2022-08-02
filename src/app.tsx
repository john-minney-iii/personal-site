import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// Views
import LandingView from "./views/landingView";
import MissingView from "./views/missingView";

const App : React.FunctionComponent = () => {
    // =========================================================
    return <>
        <BrowserRouter>
            {/* Navbar will go here */}
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
