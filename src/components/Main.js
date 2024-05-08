import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './home/HomePage'
import Header from './header/Header'
import Footer from './footer/Footer'
import Room from './room/Room'
import RoomDetail from './roomDetail/RoomDetail'

const mapStateToProps = (state) => {
  return {
      token: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
      // fetchCategories:() => dispatch(fetchCategories()),
      // fetchImages:() => dispatch(fetchImages()),
      // fetchComments:() => dispatch(fetchComments())
  }
}

const Main = (props) => {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path='*' element={<Navigate to='/' replace={true}/>} />
            <Route path='/' element={<Navigate to='/home' replace={true}/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/rooms' element={<Room/>} />
            <Route path='/roomDetail' element={<RoomDetail/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)