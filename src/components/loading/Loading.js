import React from 'react'
import "../../css/Loading.css"
const Loading = () => {
  return (
    <div className='loaderContainer'>
        <div className='loader'>
            Loading
            <span style={{color:''}} className="fa fa-solid fa-cir fa-5x"></span>
        </div>
    </div>
  )
}

export default Loading