import React, { useContext } from 'react'
import "./ReservationDataPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'
import ReservationDataSection from '../../components/ReservationDataSection'
import { AppContext } from '../../context/AppProvider'
import { useNavigate } from 'react-router-dom'

const ReservationDataPage = () => {

    const pages = [{
        title: "Reservation",
        route: "/reservation"
    }]

    const navigator = useNavigate()

    const { state } = useContext(AppContext)
    console.log(state)

    return (
      <>
          <Navbar />
          <main className='ReservationDataPage__main'>
            <SecondaryNav pages={pages} titlePage='Data' />
            <ReservationSection special="true" >
              {state.date && (
                <ReservationDataSection state={ state } />
              )}
              {!state.date && (
                <>
                  <h2>There's no information yet, please fill the required forms</h2>
                  <button
                    type='button'
                    onClick={() => navigator("/reservation")}
                  >
                    Go back
                  </button>
                </>
              )}
            </ReservationSection>
          </main>
      </>
    )
}

export default ReservationDataPage