import React, { useEffect } from 'react'
import '../../css/Room.css'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchRooms } from '../../redux/actionCreators'

const mapStateToProps = state => {
    return {
        rooms: state.rooms.rooms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: () => dispatch(fetchRooms())
    }
}

export const RoomDetail = (props) => {
    useEffect(()=> {
        props.fetchRooms();
    },[])
    const selectedRoom = useLocation()
    const roomDetail = props.rooms.filter(room => room.roomId === selectedRoom.state.roomId)
    console.log("Selected Room Id:", selectedRoom.state.roomId)
    console.log("Selected Room Array:", roomDetail)
  return (
    <div>
        {roomDetail.map(room =>{
            return (
                <div className='containerFlex'>
                    <section className='RoomInfo'>
                        <div className='ImagePosition'>
                            <img className='RoomInfoImage' src={room.image} alt={room.title} />
                        </div>
                        <div className='InfoPosition'>
                            <div className='TitlePosition'>
                                <h2><strong>Room Name:</strong> {room.title}</h2>
                            </div>
                            <div className='TitlePosition'>
                                <h4><strong>Hotel Name:</strong> {room.hotelName}</h4>
                            </div>
                            <div className='TitlePosition'>
                                <h5><strong>Room Description:</strong> {room.description}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5><strong>Room Quantity:</strong> {room.roomQuantity}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5><strong>Room Available:</strong> {room.roomQuantity}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5><strong>Room Booked:</strong> 0</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h2><strong>Price:</strong> {room.price}.Tk</h2>
                            </div>
                        </div>
                    </section>
                    <section><h3>section 2</h3></section>
                    <section><h3>section 3</h3></section>
                </div>
            )
        }
        )}
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail)