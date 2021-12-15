import React, { Fragment } from 'react';
import Contanier from './container';
import Header from './Header';
import '../../styles/dashboard/header.scss';

function Dashboard() {

  return(
    <body>
      <Fragment>
        <Header />
        <Contanier />
      </Fragment>
    </body>
  )
}

export default Dashboard;