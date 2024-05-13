import React, { useState } from 'react';
import '../../css/Header.css'
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import Logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
      token: state.auth.token
    }
}


export const Header = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navToggle = () => {
        setIsNavOpen(!isNavOpen);
    }

    let links = props.token === null?(
        <Nav 
            className='links NavItems' 
            navbar
        >
                <NavItem ><Link className='nav-link' to='/home' >Home</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/about' >About</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/rooms' >Rooms</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/category' >Category</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/login' >Log in</Link></NavItem>    
        </Nav> 
      ):(
        <Nav 
            className='links NavItems' 
            navbar
        >
                <NavItem ><Link className='nav-link' to='/home' >Home</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/about' >About</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/rooms' >Rooms</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/category' >Category</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/booking' >Booking</Link></NavItem>
                <NavItem ><Link className='nav-link' to='/logout' >Log out</Link></NavItem>    
            </Nav> 
      );
  return (
    <div>
      <Navbar 
        className='nav' expand='sm'>
        <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
            <img className='logo' src={Logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={navToggle}/>
        <Collapse isOpen={isNavOpen} className=''navbar>
          {links}       
        </Collapse>
      </Navbar>
    </div>
  )
}



export default connect(mapStateToProps)(Header)