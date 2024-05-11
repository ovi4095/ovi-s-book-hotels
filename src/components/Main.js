import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './home/HomePage'
import Header from './header/Header'
import Footer from './footer/Footer'
import Room from './room/Room'
import RoomDetail from './roomDetail/RoomDetail'
import BookingDetail from './bookingDetail/BookingDetail'
import { fetchBooked, fetchBooking, fetchRooms } from '../redux/actionCreators'
import ShowBookings from './showBookings/ShowBookings'

const mapStateToProps = (state) => {
  return {
      token: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchRooms: () => dispatch(fetchRooms()),
      fetchBooked: () => dispatch(fetchBooked()),
      fetchBooking: () => dispatch(fetchBooking()),
      
  }
}

const Main = (props) => {
  useEffect(() => {
    props.fetchRooms();
    props.fetchBooked();
    props.fetchBooking();

  },[])
  return (
    <div>
      <Header/>
        <Routes>
            <Route path='*' element={<Navigate to='/' replace={true}/>} />
            <Route path='/' element={<Navigate to='/home' replace={true}/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/rooms' element={<Room/>} />
            <Route path='/roomDetail' element={<RoomDetail/>} />
            <Route path='/bookingDetail' element={<BookingDetail/>} />
            <Route path='/booking' element={<ShowBookings/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)