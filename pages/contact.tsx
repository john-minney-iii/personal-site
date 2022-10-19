import Link from "next/link";

// Interface
interface ContactViewProps {
    setCurrentTab: (tab: string) => void;
}

const ContactView = (props: ContactViewProps) => {
    // ================================================
    return <div className="h-100 d-flex justify-content-center align-items-center flex-column">
        <h1>Contact View</h1>
        <p>
            Under construction, please check back later.
        </p>
        <Link href="/">
            <a
                className="btn btn-primary rounded-pill"
                onClick={() => props.setCurrentTab("contact")}
            >Go Home</a>
        </Link>
    </div>;
};

export default ContactView;
