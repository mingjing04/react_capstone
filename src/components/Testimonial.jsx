import React from "react";
import LemonBox from "./LemonBox";
import PersonCard from "./PersonCard";

const Testimonial = () => {
    const Lorem =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora harum ab, velit vel voluptas  ";
    return (
        <LemonBox>
            <div className="flex flex-col justify-between rounded-2xl h-auto md:[500px] mt-32 md:mt-32">
                <div>
                    <h1 className="font-serif text-xl">Tesitimonials</h1>
                </div>
                <div className="bg-lemon-green rounded-2xl py-10 p-5 h-auto gap-8 flex flex-wrap flex-row justify-around">
                    <PersonCard
                        name={"Bobby"}
                        text={Lorem}
                        src="https://randomuser.me/api/portraits/women/48.jpg"
                    />
                    <PersonCard name={"Bobby"} text={Lorem} src="https://randomuser.me/api/portraits/women/49.jpg"/>
                    <PersonCard name={"Bobby"} text={Lorem} src="https://randomuser.me/api/portraits/women/50.jpg"/>
                    <PersonCard name={"Bobby"} text={Lorem} src="https://randomuser.me/api/portraits/women/20.jpg"/>
                </div>
            </div>
        </LemonBox>
    );
};

export default Testimonial;
