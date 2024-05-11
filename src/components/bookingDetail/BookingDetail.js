import React from 'react'
import '../../css/Booking.css'
import { connect } from 'react-redux'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { addBooking, fetchBooking } from '../../redux/actionCreators'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch =>{
    return {
        addBooking: (booking, booked) => dispatch(addBooking(booking, booked)),
        fetchBooking: () => dispatch(fetchBooking())
    }
}
export const BookingDetail = (props) => {

    const bookingInfo = useLocation().state;
    const navigate = useNavigate();
    const submitHandler = (value) => {
            // console.log('Submitted Values:', value.address)
            const booking = {
                room: bookingInfo.title,
                roomId: bookingInfo.roomId,
                image: bookingInfo.image,
                hotel: bookingInfo.hotel,
                quantity: bookingInfo.quantity,
                price: bookingInfo.quantity,
                address: value.address,
                phone: value.phone,
                payment: value.paymentType,
                key: Math.random().toString(),
                date: new Date().toString(),
                uniqKey: bookingInfo.title+bookingInfo.roomId+bookingInfo.quantity+value.address+value.paymentType+new Date().toString()
            }
            const booked = {
                booked: bookingInfo.quantity,
                roomId: bookingInfo.roomId,
                key: Math.random().toString(),
                uniqKey: bookingInfo.title+bookingInfo.roomId+bookingInfo.quantity+value.address+value.paymentType+new Date().toString()
            }

            // console.log("Booking:", booking)
            // console.log("Booked:", booked)
            props.addBooking(booking, booked);
            setTimeout(() => {
                props.fetchBooking();
            }, 500)
            navigate('/booking');
            

    }

    return (
        <div>
            <div className='BookingInfoContainer'>
                <div className='BookingInfoDisplay'>
                    <div><img className='BookingImage' src={bookingInfo.image} alt={bookingInfo.title} /></div>
                    <div className='BookingInfoPosition'>
                        <div><h2 className='h2Font'><strong>Room: </strong>{bookingInfo.title}</h2></div>
                        <div><h4 className='h4Font'><strong>Hotel: </strong>{bookingInfo.hotel}</h4></div>
                        <div><h5 className='h5Font'><strong>Quantity: </strong>{bookingInfo.quantity}</h5></div>
                        <div><h4 className='h6Font'><strong>Price: </strong>{bookingInfo.price}.Tk</h4></div>
                    </div>
                </div>
                <div className='BookingInfoFrom'>
                <h3 className='BookingInfoFromTitle'>Booking Confirmation From</h3>
                <Formik
                        initialValues={{
                          address: "",
                          phone: "",
                          paymentType: "Pay In Cash",
                      }}
                      validate={values => {
                        const errors = {};
                        if(!values.address) {
                            errors.address = 'Address Required'
                        }
                        if(!values.phone) {
                            errors.phone = 'Phone Number Required'
                        } else if(!/^(?:\+88|88)?(01[3-9]\d{8})$/i.test(values.phone)){
                            errors.phone = 'Phone Number is Invalid!'
                        }
                        return errors;
                      }}
                      onSubmit={(values) => {
                        submitHandler(values);
                      }}
                      >
                        {({values, errors, handleChange, handleBlur, handleSubmit}) => (
                          <form className='checkoutForm'
                                onSubmit={handleSubmit}>
                                  <input    
                                      name='address'
                                      id ='address'
                                      type='textarea' 
                                      value={values.address} 
                                      className='form-control InputLength'
                                      placeholder='Your Address'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                  />
                                  <p className='errorMsg'>{errors.address}</p>
                                  <br />
                                  <input 
                                      name='phone'
                                      id='phone' 
                                      className='form-control InputLength' 
                                      value={values.phone}
                                      placeholder='Phone Number'
                                      onBlur={handleBlur}
                                      onChange={handleChange} 
                                  />
                                  <p className='errorMsg'>{errors.phone}</p>
                                  <br />
                                  <select 
                                      name='paymentType'
                                      id='paymentType' 
                                      className='form-control InputLength' 
                                      value={values.paymentType}
                                      onBlur={handleBlur}
                                      onChange={handleChange}>
                                          <option value="Pay In Cash">Pay In Cash</option>
                                          <option value="Bkash">Bkash</option>
                                          <option value="Nagad">Nagad</option>
                                          <option value="Visa Card">Visa Card</option>
                                          <option value="Bank Account">Bank Account</option>
                                  </select>
                                  <br />
                                  <div className='BookingBtnPosition2'>
                                        
                                        <button type='submit' className='BookBtn2'>Book Now</button>
                                        
                                        <Link
                                            to='/rooms'
                                        >
                                            <button className='CancelBtn2'>Cancel</button>
                                        </Link>
                                    </div>
                                  
                          </form>
                        )}
                      </Formik>
                </div>
            </div>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)