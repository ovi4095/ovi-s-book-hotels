import { Formik } from 'formik'
import '../../css/Review.css'
import React from 'react'
import { connect } from 'react-redux'
import { addReviews, fetchReviews } from '../../redux/actionCreators'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => {
    return {
        addReviews: (review) => dispatch(addReviews(review)),
        fetchReviews: () => dispatch(fetchReviews()),
    }
}

export const PostReview = (props) => {

    const addReviewHandle = (value) => {
        const review ={
            name: value.name,
            review: value.review,
            roomId: props.room.roomId,
            date: new Date().toString(),
        }
        props.addReviews( review);
        setTimeout(() => {
            props.fetchReviews();
        }, 500)
    }

  return (
    <div className='ReviewFormHolder'>
        <Formik
                initialValues={{
                    name: "",
                    review: "",
                }}
                validate={values => {
                const errors = {};
                if(!values.name) {
                    errors.name = 'name required'
                }else if(!/^[A-Za-z]{2}/i.test(values.name)){
                    errors.name = 'minimum 2 characters required.'
                }
                if(!values.review) {
                    errors.review = 'review required'
                } else if(!/^[A-Za-z]{2}/i.test(values.review)){
                    errors.review = 'minimum 2 characters required.'
                }
                return errors;
                }}
                onSubmit={(values, {resetForm}) => {
                    addReviewHandle(values);
                    resetForm();
                // submitHandler(values);
                }}
                >
                {({values, errors, handleChange, handleBlur, handleSubmit}) => (
                    <form className='ReviewForm'
                        onSubmit={handleSubmit}>
                            <input    
                                name='name'
                                id ='name'
                                type='textarea' 
                                value={values.name} 
                                className='form-control InputLength'
                                placeholder='Your Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <p className='errorMsg'>{errors.name}</p>
                            <br />
                            <input 
                                name='review'
                                id='review' 
                                className='form-control InputLength' 
                                value={values.review}
                                placeholder='review Number'
                                onBlur={handleBlur}
                                onChange={handleChange} 
                            />
                            <p className='errorMsg'>{errors.review}</p>
                            <br />
                            <br />
                            <div className='BookingBtnPosition2'>
                                <button type='submit' className='ReviewBtn'>Post Review</button>
                        </div>        
                    </form>
                )}
        </Formik>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(PostReview)