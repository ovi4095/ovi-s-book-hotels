import React from 'react'
import '../../css/ShowBookings.css'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

const ShowBookingList = (props) => {
  return (
    <div className='BookingListContainer'>
        {props.booking.map(booking => {
            return (
                <div className='BookingContainer' key={Math.random().toString()}>
                    <div className='BookingImagePosition'>
                        <img className='BookingImage' src={booking.image} alt="" />
                    </div>
                    <div className='BookingAllInfo'>
                        <div className='BookingRoomInfo'>
                            <h2 className='H2Fonts'><strong className='StrongTitle'>Room: </strong>{booking.room}</h2>
                            <h4 className='H4Fonts'><strong className='StrongTitle'>Hotel: </strong>{booking.hotel}</h4>
                            <h5 className='H5Fonts'><strong className='StrongTitle'>Room Booked: </strong>{booking.quantity}</h5>
                        </div>                          
                        <div className='BookingCustomerInfo'>
                            <h1 className='H1Fonts CustomerTitle'>Customer's Info</h1>
                            <h3 className='H3Fonts' ><strong className='StrongTitle'>Address: </strong>{booking.address}</h3>
                            <h5 className='H5Fonts' ><strong className='StrongTitle'>Payment: </strong>{booking.payment}</h5>
                            <h6 className='H6Fonts' ><strong className='StrongTitle'>Date: </strong>{dateFormat(booking.date, 'dddd, mmmm dS, yyyy, h:MM TT')}</h6>
                        </div>
                        <div className='ControlBtn'>
                            <button className='BookingBtn BookingCancel'
                                onClick={() => props.handleDeleteBooking(booking.key)}
                            >Cancel Booking</button>
                            <Link to='/rooms'>
                                <button className='BookingBtn GoBack'>Go Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ShowBookingList