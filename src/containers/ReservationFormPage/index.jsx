import React, { useContext } from 'react'
import "./ReservationFormPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'
import { AppContext } from '../../context/AppProvider'
import GoBackSection from '../../components/GoBackSection'
import GenericButton from '../../components/GenericButton'

const ReservationFormPage = () => {

    const pages = [
        {
            title: "Reservation",
            route: "/reservation"
        },
        {
            title: "Data",
            route: "/reservation/data"
        },
    ]

    const { state, setState } = useContext(AppContext)

    return (
      <>
          <Navbar />
          <main className='ReservationFormPage'>
            <SecondaryNav pages={pages} titlePage='Form' />
            <ReservationSection special="true" >
              {state.date && (
                <section className='ReservationFormPage__section'>
                    <h3 className='ReservationFormPage__section__info'>{state.date}-{state.hour}</h3>
                    <form action="#" onSubmit={event => event.preventDefault()}>
                      <div className='ReservationFormPage__section__grid'>
                        <input type="text" placeholder='name' />
                        <input type="email" placeholder='e-mail' name="" id="" />
                        <input type="tel" placeholder='phone' name="" id="" />
                        <input type="date" name="" id="" />
                      </div>
                      <h3 className='ReservationFormPage__section__summary'>Summary</h3>
                      <h3 className='ReservationFormPage__section__expected'>Expect {state.guests} guests on {state.date} at {state.hour} {state.time}</h3>
                      <GenericButton text='Submit' />
                    </form>
                </section>
              )}
              {!state.date && <GoBackSection />}
            </ReservationSection>
          </main>
      </>
    )
}

export default ReservationFormPage