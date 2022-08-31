import React from 'react'

const ReservationDataSection = ({ time }) => {
  return (
    <>
        {time === "PM" && (
            <form action='#' onSubmit={event => event.preventDefault()}>
                <h3>Wednesday, 10 May</h3>
                <label htmlFor="18:15">
                    18:15
                    <input type="radio" name="time" id="18:15" />
                </label>
                <label htmlFor="18:30">
                    18:30
                    <input type="radio" name="time" id="18:30" />
                </label>
                <label htmlFor="18:45">
                    18:45
                    <input type="radio" name="time" id="18:45" />
                </label>
                <label htmlFor="19:00">
                    19:00
                    <input type="radio" name="time" id="19:00" />
                </label>
                <label htmlFor="19:15">
                    19:15
                    <input type="radio" name="time" id="19:15" />
                </label>
                <label htmlFor="19:30">
                    19:30
                    <input type="radio" name="time" id="19:30" />
                </label>
                <label htmlFor="19:45">
                    19:45
                    <input type="radio" name="time" id="19:45" />
                </label>
                <label htmlFor="20:00">
                    20:00
                    <input type="radio" name="time" id="20:00" />
                </label>
                <button type='submit'>Submit</button>
            </form>
        )}
        {time === "AM" && (
            <form action='#' onSubmit={event => event.preventDefault()}>
                <h3>Wednesday, 10 May-19:00</h3>
                <label htmlFor="10:00">
                    10:00
                    <input type="radio" name="time" id="10:00" />
                </label>
                <label htmlFor="10:15">
                    10:15
                    <input type="radio" name="time" id="10:15" />
                </label>
                <label htmlFor="10:30">
                    10:30
                    <input type="radio" name="time" id="10:30" />
                </label>
                <label htmlFor="10:45">
                    10:45
                    <input type="radio" name="time" id="10:45" />
                </label>
                <label htmlFor="11:00">
                    11:00
                    <input type="radio" name="time" id="11:00" />
                </label>
                <label htmlFor="11:15">
                    11:15
                    <input type="radio" name="time" id="11:15" />
                </label>
                <label htmlFor="11:30">
                    11:30
                    <input type="radio" name="time" id="11:30" />
                </label>
                <label htmlFor="11:45">
                    11:45
                    <input type="radio" name="time" id="11:45" />
                </label>
                <button type='submit'>Submit</button>
            </form>
        )}
    </>
  )
}

export default ReservationDataSection