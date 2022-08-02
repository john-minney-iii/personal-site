import React from "react";

const MissingView : React.FunctionComponent = () => {
    // =====================================================
    return <div className="h-100 d-flex justify-content-center align-items-center flex-column">
        <h1>404 View Not Found</h1>
        <p>
            Please check your url path and check back later. Sorry for the inconvenience.
        </p>
    </div>;
};

export default MissingView;
