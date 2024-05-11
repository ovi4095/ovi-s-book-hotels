import React, { useEffect } from 'react'
import '../../css/ShowBookings.css'
import { connect } from 'react-redux'
import ShowBookingList from './ShowBookingList'
import { fetchBooked, fetchBooking, removeBooking } from '../../redux/actionCreators'

const mapStateToProps = (state) => {
    return {
        booking: state.booking.booking,
        booked: state.booked.booked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooking:() => dispatch(fetchBooking()),
        fetchBooked:() => dispatch(fetchBooked()),
        removeBooking:(bookingKey, bookedKey) => dispatch(removeBooking(bookingKey, bookedKey))
    }
}
export const ShowBookings = (props) => {
    useEffect(() => {
        props.fetchBooking();
        props.fetchBooked();
    },[])

    const handleDeleteBooking = key => {
        let selectedBooking = props.booking.filter(booking => booking.key === key)[0];
        let selectedBooked = props.booked.filter(booked => booked.uniqKey === selectedBooking.uniqKey)[0];
        // console.log("Selected Booking:", selectedBooking.uniqKey)
        // console.log("Selected Booking Key:", key)
        // console.log("Selected Booked key:", selectedBooked.key)
        props.removeBooking(key, selectedBooked.key)
        setTimeout(() =>{
            props.fetchBooking();
            props.fetchBooked();
        }, 500)


    }
    const bookingList = <ShowBookingList booking={props.booking} handleDeleteBooking={handleDeleteBooking} key={Math.random().toString()}/>
  return (
    <div className='BookingListContainer'>{bookingList}</div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowBookings)