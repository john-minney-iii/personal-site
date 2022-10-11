import React from "react";
import ProfilePicture from "../assets/images/profile-picture.jpg";

const ResumeView = () => {
    // =====================================================
    return <div className="h-100 d-flex align-items-center flex-column mt-5">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="w-25 d-flex justify-content-center">
                    <img className="w-50 rounded-circle" src={ProfilePicture} alt="hey look its me" />
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center flex-column">
            <p className="h1 fw-normal">Resume</p>
        </div>
    </div>;
};

export default ResumeView;
