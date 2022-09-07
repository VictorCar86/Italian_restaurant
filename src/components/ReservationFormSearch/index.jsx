import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppProvider'
import "./ReservationFromSearch.css"

const ReservationFormSearch = ({ special = false }) => {
  const { state, setState } = useContext(AppContext)

  const form = useRef(null)

  const navigator = useNavigate()

  let inputClass = "ReservationFormSearch__input";

  if (special){
    inputClass += " ReservationFormSearch__input--special"
  }

  function updateState(){
    const formData = new FormData(form.current)

    if (formData.has("guests") &&
        formData.has("date") &&
        formData.has("time")
      ){
      setState({
        ...state,
        guests: formData.get("guests"),
        date: formData.get("date"),
        time: formData.get("time"),
      })
      navigator("/reservation/data")
    }
    else {
      alert("Complete the entire form")
    }
    console.log(Object.fromEntries(formData), state)
  }

  return (
    <form className='ReservationFormSearch' ref={form} onSubmit={event => event.preventDefault()}>
      <select
        className={inputClass}
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
        className={inputClass}
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
        className={inputClass}
        name="time"
        id="time"
        defaultValue="DEFAULT"
        required
      >
          <option value="DEFAULT" disabled>time</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
      </select>
      <button className={`${inputClass} ReservationFormSearch__button`} onClick={ updateState } type="submit">search</button>
    </form>
  )
}

export default ReservationFormSearch