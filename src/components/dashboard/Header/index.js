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
      <Container className=" container">
        <Navbar.Brand className=" navbar-brand">
          <Link to='/pets'>
            <a className="navbar-item brand-text">ClinicaVet</a>
          </Link>
          <Navbar.Burger className=" navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Burger>
        </Navbar.Brand>      

        <Navbar.Menu className="navbar-menu" id="navMenu">
          <Navbar.Segment as="div" className="navbar-end" align="right">
            {/* <Column>
              <a href="/pets" class="navbar-item">Home</a>
            </Column> */}
            <Column  >
              <a className="navbar-item" href="/" onClick={e => logOut()}>Logout</a>
            </Column>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}

export default Header