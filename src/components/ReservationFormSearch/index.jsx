import React from 'react'
import "./ReservationFromSearch.css"

const ReservationFormSearch = () => {
  return (
    <form className='Search-form-reservation' action="#" /*onSubmit={}*/>
        <select className='Search-form-reservation__input' name="guests" id="guests" defaultValue="DEFAULT" required>
            <option value="DEFAULT" disabled>guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <select className='Search-form-reservation__input' name="date" id="date" defaultValue="DEFAULT" required>
            <option value="DEFAULT" disabled>date</option>
            <option value="May 10">May 10</option>
            <option value="May 11">May 11</option>
            <option value="May 12">May 12</option>
            <option value="May 13">May 13</option>
            <option value="May 14">May 14</option>
            <option value="May 15">May 15</option>
        </select>
        <select className='Search-form-reservation__input' name="time" id="time" defaultValue="DEFAULT" required>
            <option value="DEFAULT" disabled>time</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
        </select>
        <button className='Search-form-reservation__input Search-form-reservation__button' type="submit">search</button>
    </form>
  )
}

export default ReservationFormSearch