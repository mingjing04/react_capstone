import React from "react";
import { useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const ConfirmBooking = () => {
    const { state } = useLocation();
    const values = state.data
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="text-center flex flex-col items-center">
                <FaCheck className="border-8 p-5 border-lemon-green text-lemon-green rounded-full w-[200px] h-[200px]" />
                <h2 className="font-serif text-xl">Reservation Confirmed!</h2>
                <h3 className="text-lg mb-4">Your Reservation Details:</h3>
                <ul className="space-y-2 text-left list-none">
                    <li key="name">
                        <span className="font-medium">Name:</span> {values.name}
                    </li>
                    <li key="date">
                        <span className="font-medium">Date:</span> {values.date}
                    </li>
                    <li key="time">
                        <span className="font-medium">Time:</span> {values.time}
                    </li>
                    <li key="guests">
                        <span className="font-medium">Number of Guests:</span>{" "}
                        {values.guests}
                    </li>
                    <li key="email">
                        <span className="font-medium">Email:</span>{" "}
                        {values.email}
                    </li>
                    {values.occasion && (
                        <li key="occasion">
                            <span className="font-medium">Occasion:</span>{" "}
                            {values.occasion === "other"
                                ? values.occasion_other
                                : values.occasion.charAt(0).toUpperCase() +
                                  values.occasion.slice(1)}
                        </li>
                    )}
                </ul>
                <h2 className="font-serif text-[30px] mt-5">
                    A confirmation letter has been sent to your email address
                </h2>
            </div>
        </div>
    );
};

export default ConfirmBooking;
