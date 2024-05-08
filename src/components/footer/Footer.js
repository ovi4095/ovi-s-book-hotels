import React, { useState } from 'react'
import '../../css/Footer.css'
import FooterLogo from '../../assets/images/logo/logo.png'
import Fb from '../../assets/images/socialLinks/fb.png'
import Insta from '../../assets/images/socialLinks/insta.png'
import LinkedIn from '../../assets/images/socialLinks/linkedin.png'
import { Link } from 'react-router-dom'
import { Collapse } from 'reactstrap'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
      token: null
    }
}


export const Footer = (props) => {
    const [isToggle, setIsToggle] = useState(false)
    const colleps = () => {
    setIsToggle(!isToggle);    
    }
    let navList = props.token === null? (<ul className='collaps'> 
                                          <li><Link className='nav-link' to='/home'>Home</Link></li>
                                          <li><Link className='nav-link' to='/about'>About</Link></li>
                                          <li><Link className='nav-link' to='/gallery'>Gallery</Link></li>
                                      </ul>
                                      ):(
                                      <ul className='collaps'> 
                                        <li><Link className='nav-link' to='/home'>Home</Link></li>
                                        <li><Link className='nav-link' to='/about'>About</Link></li>
                                        <li><Link className='nav-link' to='/gallery'>Gallery</Link></li>
                                      </ul>
                                      );

    
    return (
        <div className='footer'>
        <div className='footerContent'>
            <div className='footerAbout'>
                <img className='footerLogo' src={FooterLogo} alt="Footer logo"/>
                <div className='footerAboutPara'>
                    <h3>About Book Hotels</h3>
                    <p>Book Hotels is a web platform, where <br/> 
                    you can find rooms of different <br/>
                    categories. This rooms are  listed <br/>
                    for people to book and stay with friends or <br/> 
                    Family. So, enjoy staying in beautiful hotels<br/>
                    and give your self and loved ones a trite.</p>
                </div>
            </div>
            <div className='footerNav'>
                <button className='Footerbtn' onClick={colleps}>Navigation</button>
                <div className='footerNavList'>
                    <Collapse isOpen={isToggle}>
                        {navList}
                    </Collapse>
                  </div>  
            </div>
            <div className='socailLinks'>
              <h3>Social Links</h3>
              <span><img className='socialLinkicon' src={Fb} alt="Facebook"/></span><span><img className='socialLinkicon' src={Insta} alt="Instagram"/></span><span><img className='socialLinkicon' src={LinkedIn} alt="LinkedIn"/></span>
            </div>
        </div>
        <div className='licence'>
          <p>Book Hotels Al Amin Ovi © Copyright 2024</p>
        </div>
    </div>
    )
}


export default connect(mapStateToProps)(Footer)