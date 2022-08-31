import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppProvider'
import "./ReservationFromSearch.css"

const ReservationFormSearch = () => {

  const guestSelect = useRef(undefined)
  const dateSelect = useRef(undefined)
  const timeSelect = useRef(undefined)

  const navigator = useNavigate()

  const { state, setState } = useContext(AppContext)

  function updateState(){
    if (guestSelect.current.value !== "DEFAULT" &&
        dateSelect.current.value !== "DEFAULT" &&
        timeSelect.current.value !== "DEFAULT"
      ){
      setState({
        ...state,
        guest: guestSelect.current.value,
        date: dateSelect.current.value,
        time: timeSelect.current.value,
      })
      navigator("/reservation/data")
    }
    else {
      alert("Complete the entire form")
    }
  }

  return (
    <form className='Search-form-reservation' onSubmit={event => event.preventDefault()}>
        <select
          className='Search-form-reservation__input'
          ref={ guestSelect }
          name="guests"
          id="guests"
          defaultValue="DEFAULT"
          required
        >
            <option value="DEFAULT" disabled>guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <select
          className='Search-form-reservation__input'
          ref={ dateSelect }
          name="date"
          id="date"
          defaultValue="DEFAULT"
          required
        >
            <option value="DEFAULT" disabled>date</option>
            <option value="Wednesday, May 10">Wednesday, May 10</option>
            <option value="Thursday, May 11">Thursday, May 11</option>
            <option value="Friday, May 12">Friday, May 12</option>
            <option value="Saturday, May 13">Saturday, May 13</option>
            <option value="Sunday, May 14">Sunday, May 14</option>
            <option value="Monday, May 15">Monday, May 15</option>
            <option value="Tuesday, May 16">Tuesday, May 15</option>
        </select>
        <select
          className='Search-form-reservation__input'
          ref={ timeSelect }
          name="time"
          id="time"
          defaultValue="DEFAULT"
          required
        >
            <option value="DEFAULT" disabled>time</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
        </select>
        <button className='Search-form-reservation__input Search-form-reservation__button' onClick={ updateState } type="submit">search</button>
    </form>
  )
}

export default ReservationFormSearch