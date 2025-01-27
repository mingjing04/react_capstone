import React from 'react'
import { fetchAPI } from '../api'
import { useEffect } from 'react'

function initializeTime(date) {
    const times = fetchAPI(date)
    console.log(times)
    return times
}

function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
}


function timeReducer(state, action) {
    let newState
    switch (action.type) {
        case 'UPDATE_TIMES':
            const newDate = new Date(action.payload)
            newState = updateTimes(newDate)
            break

    default:
        throw new Error()
    }
    return newState
}
export default timeReducer
export { initializeTime, updateTimes }