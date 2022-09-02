import React, { useContext } from 'react'
import "./ReservationDataPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'
import ReservationDataSection from '../../components/ReservationDataSection'
import { AppContext } from '../../context/AppProvider'
import GoBackSection from '../../components/GoBackSection'

const ReservationDataPage = () => {

    const pages = [{
        title: "Reservation",
        route: "/reservation"
    }];

    const { state, setState } = useContext(AppContext)

    return (
      <>
          <Navbar />
          <main className='ReservationDataPage__main'>
            <SecondaryNav pages={pages} titlePage='Data' />
            <ReservationSection special="true" >
              {state.date && (
                <ReservationDataSection state={state} setState={setState} />
              )}
              {!state.date && <GoBackSection />}
            </ReservationSection>
          </main>
      </>
    )
}

export default ReservationDataPage