import React from "react";
import { screen, render } from "@testing-library/react";
import { initializeTime, updateTimes } from "./components/timeReducer";


describe('availableTimeReducer', () => {
    const date = new Date()
    const testDate = new Date(2025, 0, 1)

    test('initializeTime function return an array of time slots', () => {
        const result = initializeTime(date);
        expect(result).toBeInstanceOf(Array);
    });
    test('time Reducer update available time array after a change of date', () => {
        const timeslots = initializeTime(date)
        const timeslotsnew = updateTimes(testDate)
        expect(timeslots).not.toEqual(timeslotsnew)

    })
});