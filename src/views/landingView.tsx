import React from "react";
import ProfilePicture from "../assets/images/profile-picture.jpg";

const LandingView: React.FunctionComponent = () => {
    // =====================================================
    return <div className="vh-100 vw-100 d-flex align-items-center justify-content-center flex-column">
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                    <img className="w-50 rounded-circle" src={ProfilePicture} alt="hey look its me" />
                </div>
                <div className="col d-flex align-items-left justify-content-left flex-column">
                    <p>Web and Mobile Software Engineer</p>
                    <h1>John Minney III</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet dui et dolor ornare,
                        nec sagittis ipsum placerat. Vestibulum at ligula metus. Donec eget finibus quam. Aliquam sit amet efficitur leo.
                        Integer blandit finibus leo, ut vehicula nunc mattis non. Aenean vulputate nisl et purus dictum, et ultricies justo aliquet.
                        Proin et faucibus ante, eu condimentum erat. Aliquam tincidunt consequat tellus, et tempus purus porttitor id.
                    </p>
                    <div className="mt-2">
                        <button className="btn btn-primary rounded-pill me-2">Download Resume</button>
                        <button className="btn btn-primary rounded-pill">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
        <hr className="mx-5 my-5 border border-dark" />
        <div className="vh-50 vw-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-top flex-column">
                        <p className="h5">Languages</p>
                        <ul className="list-unstyled text-center">
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>Kotlin</li>
                            <li>Dart</li>
                            <li>Arduino C/C++</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div className="col d-flex align-items-center justify-content-top flex-column">
                        <p className="h5">Frameworks & Platforms</p>
                        <ul className="list-unstyled text-center">
                            <li>ReactJS</li>
                            <li>Django</li>
                            <li>NodeJS/Express</li>
                            <li>Flutter</li>
                            <li>Native Android</li>
                            <li>MERN Stack</li>
                            <li>FARM Stack</li>
                        </ul>
                    </div>
                    <div className="col d-flex align-items-center justify-content-top flex-column">
                        <p className="h5">Methodologies</p>
                        <ul className="list-unstyled text-center">
                            <li>Agile</li>
                            <li>Quick Learner</li>
                            <li>Organized</li>
                            <li>Team Player</li>
                            <li>Passionate Worker</li>
                            <li>Optimization Forward</li>
                        </ul>
                    </div>
                    <div className="col d-flex align-items-center justify-content-top flex-column">
                        <p className="h5">Environments</p>
                        <ul className="list-unstyled text-center">
                            <li>Visual Studio</li>
                            <li>VSCode</li>
                            <li>PyCharm</li>
                            <li>IntelliJ IDEA</li>
                            <li>Windows</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                    <div className="col d-flex align-items-center justify-content-top flex-column">
                        <p className="h5">Other</p>
                        <ul className="list-unstyled text-center">
                            <li>GitHub</li>
                            <li>GitLabs</li>
                            <li>PythonAnywhere</li>
                            <li>Google Firebase</li>
                            <li>Arduino</li>
                            <li>Raspberry Pi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default LandingView;
