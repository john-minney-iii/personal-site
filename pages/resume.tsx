import Link from "next/link";
import Image from "next/image";

// Interface
interface ResumeViewProps {
    setCurrentTab: (tab: string) => void;
}

const ResumeView = (props: ResumeViewProps) => {
    // ================================================
    return <div className="h-100">
        <div className="d-flex align-items-center justify-content-center flex-column">
            <Image 
                className="w-50 rounded-circle"
                width={200}
                height={200}
                src="/images/profile-picture.jpg"
                alt="hey look its me"
            />
            <p className="h1 fw-normal">Resume</p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
            <p className="h4 fw-normal">Work Experience</p>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-5">
                        <p>Software Engineer - <span className="fw-bold">CNE Creative Enterprises</span></p>
                        <p>July 2020 - Present</p>
                    </div>
                    <div className="col-lg-7">
                        <ul>
                            <li>Use knowledge of web frameworks to produce complex scalable web applications</li>
                            <li>Build out custom REST APIs using Python and Django</li>
                            <li>Build responsive and visually pleasing UI using React</li>
                            <li>Build out cross-platform mobile applications using Flutter and React Native frameworks</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-5">
                        <p>Community Lab Work-Study - <span className="fw-bold">Aims Community College</span></p>
                        <p>October 2019 - May 2020</p>
                    </div>
                    <div className="col-lg-7">
                        <ul>
                            <li>Repair and maintain 3D printer farms</li>
                            <li>Taught community members how to use the Arduino IDE and write custom software for their projects</li>
                            <li>Help setup and run community events</li>
                            <li>Directed community members to start their own projects, and introduce them to technologies that they can use</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
            <p className="h4 fw-normal">Education</p>
            <div className="container mt-3 mx-5">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="fw-bold">University of Northern Colorado | Greeley, CO</p>
                        <p>B.S Software Engineering</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="fw-bold">Aims Community College | Greeley, CO</p>
                        <p>B.S Software Engineering</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="fw-bold">Android Software Bootcamp | Raywenderlich </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default ResumeView;

{/*
<p className="h1 fw-norma l">Resume</p> */}
