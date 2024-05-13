import { Formik } from 'formik' 
import React, { useState } from 'react'
import '../../css/Auth.css'
import { auth } from '../../redux/authActionCreators'
import { connect } from 'react-redux'
import Loading from '../loading/Loading'
import { Alert, Input } from 'reactstrap'

const mapStateToProps = state => {
    return {
      authLoading:state.auth.authLoading,
      authFailedMsg:state.auth.authFailedMsg,
    }
}

const mapDispatchToProps = dispatch => {
     return {
        auth:(authData, mode) => dispatch(auth(authData, mode))
     }
}

const Auth = props => {
      const [authMode, setAuthMode] = useState('Log in')

      const switchAuthModeHandler = () => {
          setAuthMode(authMode==='Sign Up'?'Log in':'Sign Up')
      }

      const handleAuth = (authData, mode) => {
        props.auth(authData, mode);
      }
      let errMsg = null;
      if(props.authFailedMsg !==null) {
        console.log('From Auth Page:', props.authFailedMsg)
        let msg = props.authFailedMsg === 'INVALID_LOGIN_CREDENTIALS'? 'Email or Password is incorrect!':'Email exists!';
        console.log('Msg:', msg)
        errMsg = <div className='container ErroMsg'>
                    <Alert style={{ display:'inline-block',
                                    fontSize:'16px',
                                    width:'70%',
                                    marginTop:'5rem',
                                    marginBottom:'-5rem',
                                    textAlign:'center'}} 
                                    color='danger'>{msg}
                    </Alert>
                </div>
      }else {
        errMsg = null;
      }
      let from = null;
      if(props.authLoading) {
        from =<Loading/>
      }else {

            from =(<Formik
                  initialValues= {
                    {
                      email: '',
                      password: '',
                      passwordConfirm: '',}
                  }            
                  onSubmit={
                    (values) => {
                      console.log("Values:",values);

                      handleAuth({
                        email: values.email,
                        password: values.password,
                        returnSecureToken: true,
                      }, authMode)
                    }
                  }
            
                  validate={(values) => {
                    const errors = {};
            
                    if(authMode==="Sign Up") {
                      if(!values.email) {
                          errors.email = 'Required';
                      }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)){
                          errors.email = "Invalid email address!";
                      }
            
                      if(!values.password) {
                          errors.password = 'Required';
                      }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.password)){
                          errors.password = "password must be at least 8 characters including a number an uppercase letter!";
                      }
            
                      if(!values.passwordConfirm) {
                          errors.passwordConfirm = 'Required';
                      }else if (values.password !== values.passwordConfirm){
                          errors.passwordConfirm = "password field does not match!";
                      }
                    }else if(authMode==="Log in") {
                      
                      if(!values.email) {
                        errors.email = 'Required';
                      }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)){
                        errors.email = "Invalid email address!";
                      
                      if(!values.password) {
                          errors.password = 'Required';
                      }
                    }
            
                    }

                  return errors;
            
                  }}
              >
                  {({values, handleChange, handleSubmit, errors} ) => (<div className='container AuthContainer col-md-6 col-lg-6'>
                              <form className='AuthForm' 
                                    onSubmit={handleSubmit}>
                                  <input
                                      name='email'
                                      placeholder='Your Email'
                                      className='form-control' 
                                      value={values.email}
                                      onChange={handleChange}
                                  />
                                  <span className="AuthError">{errors.email}</span>
                                  <br />
                                  <input
                                      name='password'
                                      type={authMode === 'Sign Up'?'text':'password'}
                                      placeholder='Password'
                                      className='form-control' 
                                      value={values.password}
                                      onChange={handleChange}
                                  />
                                  <span className="AuthError">{errors.password}</span>
                                  <br />
                                  {authMode === 'Sign Up'? <div>
                                  <input
                                      name='passwordConfirm'
                                      placeholder='Confirm Password'
                                      className='form-control'
                                      value={values.passwordConfirm}
                                      onChange={handleChange}
                                  />
                                  <span className="AuthError">{errors.passwordConfirm}</span>
                                  <br />
                                  </div>: null}
                                  <div className='AuthBtnpossition'>
                                  <button type="submit"
                                          className="btnPossion"
                                          >{authMode === 'Sign Up'?'Sign Up': 'Log in'}
                                  </button>
                                  <a 
                                      className='AuthMode'
                                      onClick={switchAuthModeHandler}
                                  >
                                    {authMode === 'Sign Up'? 
                                    "Already have an account? Log in Here!":
                                    "Don’t have any account? Sign up Here!"}</a>
                                  </div>
                              </form>
                          </div>)}
                      </Formik>);
      }
      


    return (
      <div className='AuthHolder'>
          {errMsg}
          {from}
      </div>
    )
  }

export default connect(mapStateToProps, mapDispatchToProps)(Auth);