import { Column, Container, Navbar } from 'rbx';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UsersService from '../../../services/users';
import '../../../styles/dashboard/header.scss'

function Header(props) {
  const [redirectToHome, setRedirectToHome] = useState(false)

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  }

  if (redirectToHome == true)
    return <Redirect to={{pathname: "/"}} />

  return(
    <Navbar className=" navbar is-white">
      <Column.Group className=" container">
        <Column size='11' offset='1' className="navbar-start" align='start'>
          <Link to='/pets'>
            <a>ClinicaVet</a>
          </Link>
        </Column>
      </Column.Group>       
      <Navbar.Burger className=" navbar-burger burger" data-target="navbar-menu">
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Burger>
      <Navbar.Menu id="navbar-menu">
        <Navbar.Segment className="navbar-start" align="start">
          <Navbar.Item as="div">
            <a>Home</a>
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment className=" navbar-item navbar-end" align="rigth">
          <Navbar.Item className="navbar-end" align="end">
            <a href="#" onClick={e => logOut()}>Logout</a>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default Header