import React, { useEffect } from 'react'
import '../../css/Room.css'
import { connect } from 'react-redux'
import { fetchRooms } from '../../redux/actionCreators'
import RoomCard from './RoomCard'

const mapStateToProps = (state) => {
    return {
      rooms: state.rooms.rooms
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchRooms: () => dispatch(fetchRooms()),
    }
}

export const Room = (props) => {


  useEffect(() => {
    props.fetchRooms();
  },[])

  const roomcard = <RoomCard rooms={props.rooms}/>

  return (
    <div>
        {roomcard}
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Room)