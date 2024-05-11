import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../../redux/actionCreators'
import ViewReviewList from './ViewReviewList'

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews()),
    }
}
export const ViewReview = (props) => {
    useEffect(() => {
        props.fetchReviews();
    },[])
    const selectedReview = props.reviews.filter(reviews => reviews.roomId === props.room.roomId)
    console.log("Selected Reviews:", selectedReview)
    const reviewList = <ViewReviewList review={selectedReview}/>
  return (
    <div>{reviewList}</div>
  )
}




export default connect(mapStateToProps, mapDispatchToProps)(ViewReview)