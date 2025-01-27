import React from "react";
import Button from "./LemonButton";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    
    const handleReserveClick = () => {
        navigate('/reservation');
    };
    
    return (
        <div className="bg-lemon-green w-full flex h-screen flex-col-reverse md:h-[500px] md:flex-row">
            <div className="md:basis-1/3 px-5 flex flex-col justify-around text-white">
                <h1 className="text-xl font-serif">Little Lemon Restaurant</h1>
                <p className="text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur eius odio, in eum nihil quo deleniti unde non
                    praesentium, enim sed. At iusto, beatae culpa vel laborum ut
                    dolores harum.
                </p>
                <div className="self-end m-10">
                    <Button onClick={handleReserveClick} variant="primary">
                        Reserve a Table
                    </Button>
                </div>
            </div>
            <div
                className="flex-1 bg-center bg-cover md:h-[500px]"
                style={{
                    backgroundImage: "url('src/assets/images/restaurant.jpg')",
                }}
            ></div>
        </div>
    );
};

export default Landing;
