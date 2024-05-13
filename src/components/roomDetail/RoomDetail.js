import React, { useEffect, useState } from 'react'
import '../../css/Room.css'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { fetchBooked, fetchRooms } from '../../redux/actionCreators'
import PostReview from '../reviews/PostReview'
import ViewReview from '../reviews/ViewReview'

const mapStateToProps = state => {
    return {
        rooms: state.rooms.rooms,
        booked: state.booked.booked,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
        fetchBooked: () => dispatch(fetchBooked())
    }
}

export const RoomDetail = (props) => {
    const [quantityNumber,setQuantityNumber] = useState(0)
    useEffect(()=> {
        props.fetchRooms();
        props.fetchBooked();
    },[])

    const increaseQuantity = () => {
        setQuantityNumber(quantityNumber+1)
    }
    const decreaseQuantity = () => {
        setQuantityNumber(quantityNumber-1)
    }
    const selectedRoom = useLocation();
    const roomDetail = props.rooms.filter(room => room.roomId === selectedRoom.state.roomId);
    const bookedRooms = props.booked.filter(room => room.roomId === selectedRoom.state.roomId)

    let totalBooked = 0;
    bookedRooms.forEach(obj => {
        totalBooked+= obj.booked;
    })
    const image = roomDetail.map(room => {return room.image})[0];
    const title = roomDetail.map(room => {return room.title})[0];
    const roomId = roomDetail.map(room => {return room.roomId})[0];
    const hotel = roomDetail.map(room => {return room.hotelName})[0];
    const roomQuantity = roomDetail.map(room => {return room.roomQuantity})[0];
    const roomPrice = roomDetail.map(room => {return room.price})[0];

    const roomAvailable = parseInt(roomQuantity) - totalBooked;
    const totalPrice = parseInt(roomPrice)* quantityNumber;
    const increaseQuantityBtnDisable = quantityNumber === roomAvailable? true : false;
    const decreaseQuantityBtnDisable = quantityNumber === 0? true : false;

    const bookingModule = props.token === null?(
        <div className='logIngMsg'>
                                <div className='BooKingInfoDisplay'>
                                    <div className='QuantityTitlePosition'>
                                            <h2 className='h2FontSize'><strong className='StrongTitle'>Please! Log in to Book Rooms</strong></h2>
                                    </div>
                                    <div className='BookingBtnPosition'>
                                        <Link
                                            to='/login'
                                        >
                                            <button className='BookBtn'>Log in</button>
                                        </Link>
                                        <Link
                                            to='/rooms'
                                        >
                                            <button className='CancelBtn'>Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
    ):(
        <div className='BookingDisplay'>
                                <div className='BookingModule'>
                                    <button className='QuantityBtn' disabled={decreaseQuantityBtnDisable} onClick={decreaseQuantity}>-</button>
                                    <p className='QuantityDisplay'>{quantityNumber}</p>
                                    <button className='QuantityBtn' disabled={increaseQuantityBtnDisable} onClick={increaseQuantity}>+</button>
                                </div>
                                <div className='BooKingInfoDisplay'>
                                    <div className='QuantityTitlePosition'>
                                        <h2 className='h2FontSize'><strong className='StrongTitle'>Total Price:</strong> {totalPrice}.Tk</h2>
                                    </div>
                                    <div className='BookingBtnPosition'>
                                        <Link
                                            to='/bookingDetail'
                                            state={{
                                                image:image,
                                                title:title,
                                                roomId: roomId,
                                                hotel:hotel,
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
    )


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
                                <h2 className='h2FontSize'><strong className='StrongTitle'>Room Name:</strong> {room.title}</h2>
                            </div>
                            <div className='TitlePosition'>
                                <h4 className='h4FontSize'><strong className='StrongTitle'>Hotel Name:</strong> {room.hotelName}</h4>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong className='StrongTitle'>Room Description:</strong> {room.description}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong className='StrongTitle'>Room Quantity:</strong> {room.roomQuantity}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong className='StrongTitle'>Room Available:</strong> {roomAvailable}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h5 className='h5FontSize'><strong className='StrongTitle'>Room Booked:</strong> {totalBooked}</h5>
                            </div>
                            <div className='TitlePosition'>
                                <h2 className='h2FontSize'><strong className='StrongTitle'>Price:</strong> {room.price}.Tk</h2>
                            </div>
                            {bookingModule}
                        </div>
                    </section>
                    <section><PostReview room={room} key={room.key}/></section>
                    <section><ViewReview room={room} key={room.key+"review"}/></section>
                </div>
            )
        }
        )}
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail)