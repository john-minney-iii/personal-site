import Link from "next/link";

// Interfaces
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
        <Link href="/">
            <a
                className="navbar-brand mb-0 ms-3 h1"
                onClick={() => props.setCurrentTab("about")}
            >John Minney III</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-2">
                <Link href="/">
                    <a
                        className={navLinkClass("about")}
                        onClick={() => props.setCurrentTab("about")}
                    >About</a>
                </Link>
                <Link href="/projects">
                    <a
                        className={navLinkClass("projects")}
                        onClick={() => props.setCurrentTab("projects")}
                    >Projects</a>
                </Link>
                <Link href="/resume">
                    <a
                        className={navLinkClass("resume")}
                        onClick={() => props.setCurrentTab("resume")}
                    >Resume</a>
                </Link>
                <Link href="/contact">
                    <a
                        className={navLinkClass("contact")}
                        onClick={() => props.setCurrentTab("contact")}
                    >Contact</a>
                </Link>
                <Link href="/blog">
                    <a
                        className={navLinkClass("blog")}
                        onClick={() => props.setCurrentTab("blog")}
                    >Blog</a>
                </Link>
            </div>
        </div>
    </nav>;
};

export default Navbar;
