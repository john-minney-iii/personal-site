import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
};

const Navbar = (props: NavbarProps) => {

    const navLinkClass = (tab: string) => {
        let classTemp: string = "nav-item nav-link";
        if (tab === props.currentTab)
            classTemp += " active";
        return classTemp;
    };

    // =====================================================
    return <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand mb-0 ms-3 h1">John Minney III</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink 
                    className={navLinkClass("about")} 
                    to="/"
                    onClick={() => props.setCurrentTab("about")}
                >About</NavLink>
                <NavLink 
                    className={navLinkClass("projects")} 
                    to="/projects"
                    onClick={() => props.setCurrentTab("projects")}
                >Projects</NavLink>
                <NavLink 
                    className={navLinkClass("resume")} 
                    to="/resume"
                    onClick={() => props.setCurrentTab("resume")}
                >Resume</NavLink>
                <NavLink 
                    className={navLinkClass("contact")} 
                    to="/contact"
                    onClick={() => props.setCurrentTab("contact")}
                >Contact</NavLink>
                <NavLink 
                    className={navLinkClass("blog")} 
                    to="/blog"
                    onClick={() => props.setCurrentTab("blog")}
                >Blog</NavLink>
            </div>
        </div>
    </nav>;
};

export default Navbar;
