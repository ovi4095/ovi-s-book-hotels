import React, { useEffect } from 'react'
import { fetchBooked, fetchBooking, fetchCategories, fetchRooms } from '../redux/actionCreators'
import ShowBookings from './showBookings/ShowBookings'
import { authCheck } from '../redux/authActionCreators'
import { Navigate, Route, Routes } from 'react-router-dom'
import RoomDetail from './roomDetail/RoomDetail'
import BookingDetail from './bookingDetail/BookingDetail'
import Category from './category/Category'
import HomePage from './home/HomePage'
import Header from './header/Header'
import Footer from './footer/Footer'
import Logout from './auth/Logout'
import About from './about/About'
import Auth from './auth/Auth'
import Room from './room/Room'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
      token: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
      authCheck: () => dispatch(authCheck()),
      fetchRooms: () => dispatch(fetchRooms()),
      fetchBooked: () => dispatch(fetchBooked()),
      fetchBooking: () => dispatch(fetchBooking()),
      fetchCategories: () => dispatch(fetchCategories()),
      
  }
}

const Main = (props) => {
  useEffect(() => {
    props.authCheck();
    props.fetchRooms();
    props.fetchBooked();
    props.fetchBooking();
    props.fetchCategories();

  },[])

  let routes = props.token === null?(
                              <Routes>
                                  <Route path='*' element={<Navigate to='/' replace={true}/>} />
                                  <Route path='/' element={<Navigate to='/home' replace={true}/>} />
                                  <Route path='/home' element={<HomePage/>} />
                                  <Route path='/about' element={<About/>} />
                                  <Route path='/login' element={<Auth/>} />
                                  <Route path='/category' element={<Category/>} />
                                  <Route path='/rooms' element={<Room/>} />
                                  <Route path='/roomDetail' element={<RoomDetail/>} />
                              </Routes>
                                  ):(
                              <Routes>
                                  <Route path='*' element={<Navigate to='/' replace={true}/>} />
                                  <Route path='/' element={<Navigate to='/home' replace={true}/>} />
                                  <Route path='/home' element={<HomePage/>} />
                                  <Route path='/about' element={<About/>} />
                                  <Route path='/logout' element={<Logout/>} />
                                  <Route path='/category' element={<Category/>} />
                                  <Route path='/rooms' element={<Room/>} />
                                  <Route path='/roomDetail' element={<RoomDetail/>} />
                                  <Route path='/bookingDetail' element={<BookingDetail/>} />
                                  <Route path='/booking' element={<ShowBookings/>} />
                              </Routes>
                                    );

  return (
    <div>
      <Header/>
        {routes}
      <Footer/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)