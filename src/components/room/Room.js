import React, { useEffect } from 'react'
import '../../css/Room.css'
import { connect } from 'react-redux'
import { fetchBooked, fetchRooms } from '../../redux/actionCreators'
import RoomCard from './RoomCard'
import { useLocation } from 'react-router-dom'
import Loading from '../loading/Loading'

const mapStateToProps = (state) => {
    return {
      rooms: state.rooms.rooms,
      booked: state.booked.booked,
      loading: state.rooms.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchRooms: () => dispatch(fetchRooms()),
      fetchBooked: () => dispatch(fetchBooked()),
    }
}

export const Room = (props) => {

  useEffect(() => {
    props.fetchRooms();
    props.fetchBooked();
  },[])
  
  const categorySelectedRoomsState = useLocation().state;
  console.log('stare',categorySelectedRoomsState)
  const categorySelectedRooms = categorySelectedRoomsState !== null? props.rooms.filter( room => room.category === categorySelectedRoomsState.category):null;
  const roomCart = categorySelectedRooms !== null? <RoomCard rooms={categorySelectedRooms} booked={props.booked}/>: <RoomCard rooms={props.rooms} booked={props.booked}/>;
  const room = props.loading === true? (<Loading/>):roomCart; 
  return (
    <div>
        {room}
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Room)