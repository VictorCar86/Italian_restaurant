import React from 'react'
import "./ReservationFirstPage.css"
import Navbar from '../../components/Navbar'
import SecondaryNav from '../../components/SecondaryNav'
import ReservationSection from '../../components/ReservationSection'
import ReservationFormSearch from '../../components/ReservationFormSearch'

const ReservationFirstPage = () => {
  return (
    <>
        <Navbar />
        <main className='ReservationFirstPage__main'>
          <SecondaryNav titlePage='Reservation' />
          <ReservationSection>
            <ReservationFormSearch />
          </ReservationSection>
        </main>
    </>
  )
}

export default ReservationFirstPage