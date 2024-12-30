import React from "react";

const PersonCard = ({src, name, text}) => {
    return (
        <div className="bg-lemon-peach w-[300px] rounded-2xl p-5 flex flex-col justify-between items-center">
            <div className="rounded-full overflow-hidden w-full flex flex-row justify-center">
                <img src={src} className="rounded-full" />
            </div>
            <div>
                <h2 className="m-2 text-black text-lg font-san">{name}</h2>
            </div>
            <div>
                <p className="text-lemon-green m-10 text-md font-serif">{text}</p>
            </div>
        </div>
    );
};

export default PersonCard;
