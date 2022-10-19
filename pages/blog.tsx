import Link from "next/link";

// Interface
interface BlogViewProps {
    setCurrentTab: (tab: string) => void;
}

const BlogView = (props: BlogViewProps) => {
    // ================================================
    return <div className="h-100 d-flex justify-content-center align-items-center flex-column">
        <h1>Blog View</h1>
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

export default BlogView;
