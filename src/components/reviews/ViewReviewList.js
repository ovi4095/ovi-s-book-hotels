import React from 'react'
import dateFormat from 'dateformat'
const ViewReviewList = (props) => {
  return (
    <div className='ReviewContainerHolder'>
        {props.review.map( review => {
            return (
                <div className='ReviewContainer'>
                    <div className='ReviewCard'>
                        <h5 className='Name'>{review.name}</h5>
                        <p className='Review'>{review.review}</p>
                        <p className='Date'>Date: {dateFormat(review.date, 'dddd, mmmm dS, yyyy, h:MM TT' )}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ViewReviewList