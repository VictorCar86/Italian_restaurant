import React, { useContext } from 'react'
import "./ReservationDataPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'
import ReservationDataSection from '../../components/ReservationDataSection'
import { AppContext } from '../../context/AppProvider'

const ReservationDataPage = () => {

    const pages = [{
        title: "Reservation",
        route: "/reservation"
    }]

    const { state } = useContext(AppContext)

    return (
      <>
          <Navbar />
          <main className='ReservationDataPage__main'>
            <SecondaryNav pages={pages} titlePage='Data' />
            {state.date !== undefined && (
              <ReservationSection special="true" >
                <ReservationDataSection />
              </ReservationSection>
            )}
            {state.date === undefined && (
              <h1>OJO PUES!</h1>
            )}
          </main>
      </>
    )
}

export default ReservationDataPage