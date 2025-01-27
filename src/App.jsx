import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/home";
import ConfirmBooking from "./components/confirmBooking";
import BookingPage from "./pages/BookingPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/reservation" element={<BookingPage />} />
                        <Route
                            path="/confirmBooking"
                            element={<ConfirmBooking />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
