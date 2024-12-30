import React, { useReducer, useState } from 'react'
import BookingForm from './BookingForm'

const BookingPage = () => {

  const [availableTimeState, availableTimeDispatch] = useReducer()
  return (
    <>
      <div>BookingPage</div>
      <BookingForm />
    </>
  )
}

export default BookingPage