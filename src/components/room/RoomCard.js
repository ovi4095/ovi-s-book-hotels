import React from 'react'
import '../../css/Room.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import ClampLines from 'react-clamp-lines';
import { Link } from 'react-router-dom';



const RoomCard = (props) => {
  return (
    <div className='RoomPosition'>{props.rooms.map(room =>{
        const selectedBooked = props.booked.filter(booked => booked.roomId === room.roomId)
        console.log("Booked in Cart:",props.booked)
        let totalBooked = 0;
        selectedBooked.forEach(obj => {
        totalBooked+= obj.booked;
        })
        const price = room.roomQuantity === totalBooked? <strong className='WarningText'>Room Not Available.</strong> :
        <p><strong>Price:</strong> {room.price} .Tk</p>;
        const seeDetailBtn = room.roomQuantity === totalBooked?(
                            <Button 
                                className='CardBtn'
                                disabled={true}
                                >
                                See Detail
                            </Button>):(
                        <Link to='/roomDetail' state={{roomId: room.roomId}}>
                            <button 
                                className='CardBtn'
                                >
                                See Detail
                            </button>
                        </Link>
                        );
        return (
            <Card
                style={{
                    width: '18rem',
                    margin: 30,
                    textAlign: 'left'
                }}
                >
                <img    
                    className='CardImage'
                    alt={room.title}
                    src={room.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {room.title}
                    </CardTitle>
                    <CardSubtitle
                        style={{
                            overflow:'hidden',
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            
                        }}
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Hotel Name:{room.hotelName}
                    </CardSubtitle>
                    <CardText
                        style={{color:'#A91D3A'}}
                    >
                       <strong>Description:</strong> 
                       <ClampLines
                            text={room.description}
                            id={Math.random().toString()}
                            lines={3}
                            buttons= {false}
                            ellipsis='...'
                            innerElement='P'
                            
                       />
                    </CardText>
                    <CardSubtitle
                        style={{
                            fontSize: 20,
                            marginBottom: 20,
                            textAlign:'center'
                        }}    
                    >
                       {price}
                    </CardSubtitle>
                    {seeDetailBtn}
                </CardBody>
            </Card>
        )}
    )}</div>
  )
}

export default RoomCard