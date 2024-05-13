import React, { useEffect } from 'react'
import '../../css/ShowBookings.css'
import { connect } from 'react-redux'
import ShowBookingList from './ShowBookingList'
import { fetchBooked, fetchBooking, removeBooking } from '../../redux/actionCreators'
import Loading from '../loading/Loading'

const mapStateToProps = (state) => {
    return {
        booking: state.booking.booking,
        booked: state.booked.booked,
        loading: state.booking.isLoading
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
        console.log('Booking Key:', key)
        console.log('Booked Key:', selectedBooked.key)
        props.removeBooking(key, selectedBooked.key)
        setTimeout(() =>{
            props.fetchBooking();
            props.fetchBooked();
        }, 500)
    }

const bookingList = <ShowBookingList booking={props.booking} handleDeleteBooking={handleDeleteBooking} key={Math.random().toString()}/>

const booking = props.booking.length !==0? bookingList: <h4 className='EmptyOrderList'>No Order Found</h4>;

const bookings = props.loading === true? (<Loading/>): booking;

return (
    <div className='BookingListContainer'>{bookings}</div>    
)
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowBookings)