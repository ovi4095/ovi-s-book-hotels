import React, { useState } from 'react'
import '../../css/Room.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import ClampLines from 'react-clamp-lines';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const RoomCard = (props) => {
    const navigate = useNavigate()
    // const [toggleHover, setToggleHover] = useState(false)
    
    // const toggleHoverHandler = () => {
    //     setToggleHover(!toggleHover)
    // }

    // const hoverColor = toggleHover === false? "#A91D3A": "#151515";
    // console.log("toggle:", hoverColor)
  return (
    <div className='RoomPosition'>{props.rooms.map(room =>{
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
                    <CardText>
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
                        }}    
                    >
                       <strong>Price:</strong> {room.price} .Tk
                    </CardSubtitle>
                    <Link to='/roomDetail' state={{roomId: room.roomId}}>
                        <button 
                            className='CardBtn'
                            onClick={() => {
                            return    
                            }}
                            >
                            See Detail
                        </button>
                    </Link>
                </CardBody>
            </Card>
        )}
    )}</div>
  )
}

export default RoomCard