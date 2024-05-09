import React, { useEffect, useState } from 'react'
import '../../css/Room.css'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
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
    const [quantityNumber,setQuantityNumber] = useState(0)
    
    useEffect(()=> {
        props.fetchRooms();
    },[])

    const increaseQuantity = () => {
        setQuantityNumber(quantityNumber+1)
    }
    const decreaseQuantity = () => {
        setQuantityNumber(quantityNumber-1)
    }

    
    const selectedRoom = useLocation();
    const roomDetail = props.rooms.filter(room => room.roomId === selectedRoom.state.roomId);
    const roomQuantity = roomDetail.map(room => {return room.roomQuantity})[0];
    const roomPrice = roomDetail.map(room => {return room.price})[0];

    const roomAvailable = parseInt(roomQuantity) - quantityNumber;
    const totalPrice = parseInt(roomPrice)* quantityNumber;
    const increaseQuantityBtnDisable = quantityNumber === roomQuantity? true : false;
    const decreaseQuantityBtnDisable = quantityNumber === 0? true : false;


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
                                <h2 className='h2FontSize'><strong>Room Name:</strong> {room.title}</h2>
                            </div>
                            <div className='TitlePosition'>
                                <h4 className='h4FontSize'><strong>Hotel Name:</strong> {room.hotelName}</h4>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong>Room Description:</strong> {room.description}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong>Room Quantity:</strong> {room.roomQuantity}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong>Room Available:</strong> {roomAvailable}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong>Room Booked:</strong> {quantityNumber}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h2 className='h2FontSize'><strong>Price:</strong> {room.price}.Tk</h2>
                            </div>
                            <div className='BookingDisplay'>
                                <div className='BookingModule'>
                                    <button className='QuantityBtn' disabled={decreaseQuantityBtnDisable} onClick={decreaseQuantity}>-</button>
                                    <p className='QuantityDisplay'>{quantityNumber}</p>
                                    <button className='QuantityBtn' disabled={increaseQuantityBtnDisable} onClick={increaseQuantity}>+</button>
                                </div>
                                <div className='BooKingInfoDisplay'>
                                    <div className='QuantityTitlePosition'>
                                        <h2 className='h2FontSize'><strong>Total Price:</strong> {totalPrice}.Tk</h2>
                                    </div>
                                    <div className='BookingBtnPosition'>
                                        <Link
                                            to='/bookingDetail'
                                            state={{
                                                image:room.image,
                                                title:room.title,
                                                hotel:room.hotelName,
                                                price:totalPrice,
                                                quantity:quantityNumber,
                                            }}    
                                        >
                                            <button disabled={decreaseQuantityBtnDisable} className='BookBtn'>Book Now</button>
                                        </Link>
                                        <Link
                                            to='/rooms'
                                        >
                                            <button className='CancelBtn'>Cancel</button>
                                        </Link>
                                    </div>
                                </div>
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