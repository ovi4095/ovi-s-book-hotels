import React from 'react'
import '../../css/Booking.css'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Formik } from 'formik'

export const BookingDetail = (props) => {

    const bookingInfo = useLocation().state;
    // console.log()
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
                <div>
                <Formik
                        initialValues={{
                          deliveryAddress: "",
                          phone: "",
                          paymentType: "Cash On Delivery",
                      }}
                      validate={values => {
                        const errors = {};
                        if(!values.deliveryAddress) {
                            errors.deliveryAddress = 'Address Required'
                        }
                        if(!values.phone) {
                            errors.phone = 'Phone Number Required'
                        } else if(!/^(?:\+88|88)?(01[3-9]\d{8})$/i.test(values.phone)){
                            errors.phone = 'Phone Number is Invalid!'
                        }
                        return errors;
                      }}
                      onSubmit={(values) => {
                        this.submitHandler(values);
                      }}
                      >
                        {({values, errors, handleChange, handleBlur, handleSubmit}) => (
                          <form className='checkoutForm'
                                onSubmit={handleSubmit}>
                                  <input    
                                      name='deliveryAddress'
                                      id ='deliveryAddress'
                                      type='textarea' 
                                      value={values.deliveryAddress} 
                                      className='form-control'
                                      placeholder='Your Address'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                  />
                                  <p className='errorMsg'>{errors.deliveryAddress}</p>
                                  <br />
                                  <input 
                                      name='phone'
                                      id='phone' 
                                      className='form-control' 
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
                                      className='form-control' 
                                      value={values.paymentType}
                                      onBlur={handleBlur}
                                      onChange={handleChange}>
                                          <option value="Cash On delivery">Cash On Deivery</option>
                                          <option value="Bkash">Bkash</option>
                                          <option value="Nagad">Nagad</option>
                                          <option value="Visa Card">Visa Card</option>
                                          <option value="Bank Account">Bank Account</option>
                                  </select>
                                  <br />
                                  {/* <Button 
                                      type='submit'
                                      style={{ backgroundColor: "#D70F64",
                                               marginRight: "2rem" }}
                                      disabled={order} 
                                      >Place Order
                                  </Button>
                                  <Button 
                                      color='secondary'
                                      className="ml-1" 
                                      onClick={this.goBack} 
                                      >cancel
                                  </Button> */}
                              {/* {this.state.checkout && <Navigate to='/' replace="true"/>} */}
                          </form>
                        )}
                      </Formik>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)