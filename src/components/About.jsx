import React from "react";
import LemonBox from "./LemonBox";
import Photo from "../assets/images/Mario and Adrian A.jpg";
const About = () => {
    return (
        <div className="my-10">
            <LemonBox>
                <div className="flex flex-col-reverse md:gap-10 md:flex-row justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="text-xl font-serif">Little Lemon</h1>
                        <h2 className="text-lg font-sans">Chicago</h2>
                        <p>
                            Welcome to Little Lemon Restaurant, where
                            Mediterranean flavors come to life in the heart of
                            Chicago. We’re passionate about serving delicious,
                            wholesome meals inspired by the vibrant cuisine of
                            the Mediterranean. From fresh salads and savory
                            hummus to perfectly grilled meats and seafood, every
                            dish is crafted with love using the finest
                            ingredients.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={Photo} alt="Mario_Adrian" className="grow-0"/>
                    </div>
                </div>
            </LemonBox>
        </div>
    );
};

export default About;
