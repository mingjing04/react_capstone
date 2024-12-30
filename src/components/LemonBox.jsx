import React from "react";

const LemonBox = ({children}) => {
    return (
        <div className="md:flex flex-row justify-center">
            <div className="md:flex flex-col md:mx-[70px] mx-[40px] md:w-[66.6%]">
                {children}
            </div>
        </div>
    );
};

export default LemonBox;
