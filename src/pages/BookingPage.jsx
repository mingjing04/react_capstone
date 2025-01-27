import React, { useEffect, useReducer, useState } from "react";
import ReserveForm from "../components/Reservation";
import timeReducer from "../components/timeReducer";
import { initializeTime } from "../components/timeReducer";

const BookingPage = () => {
    const [date, setDate] = useState(new Date())
    const [availableTimes, dispatch] = useReducer(timeReducer, initializeTime(date))
    return (
        <div>
            <ReserveForm dispatch={dispatch} availableTimes={availableTimes} />
        </div>
    );
};

export default BookingPage;
