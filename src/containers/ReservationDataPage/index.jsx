import React from 'react'
import "./ReservationDataPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'

const ReservationDataPage = () => {

    const pages = [{
        title: "Reservation",
        route: "/reservation"
    }]

  return (
    <>
        <Navbar />
        <main className='ReservationDataPage__main'>
          <SecondaryNav pages={pages} titlePage='Data' />
          <ReservationSection>
            <section>
                <h3>Wednesday, 10 May-19:00</h3>
                <label htmlFor="time">
                    18:15
                    <input type="radio" name="time" id="18:15" />
                </label>
                <label htmlFor="">
                    18:30
                    <input type="radio" name="time" id="18:30" />
                </label>
                <label htmlFor="">
                    18:45
                    <input type="radio" name="time" id="18:45" />
                </label>
                <label htmlFor="">
                    19:00
                    <input type="radio" name="time" id="19:00" />
                </label>
                <label htmlFor="">
                    19:15
                    <input type="radio" name="time" id="19:15" />
                </label>
                <label htmlFor="">
                    19:30
                    <input type="radio" name="time" id="19:30" />
                </label>
                <label htmlFor="">
                    19:45
                    <input type="radio" name="time" id="19:45" />
                </label>
                <label htmlFor="">
                    20:00
                    <input type="radio" name="time" id="20:00" />
                </label>
                <button type='button'>Submit</button>
            </section>
          </ReservationSection>
        </main>
    </>
  )
}

export default ReservationDataPage