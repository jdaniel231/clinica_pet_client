import React, { Fragment } from 'react';
import Header from '../../../components/dashboard/Header';
import RegisterPet from '../../../components/pets/register';



const RegisterPetScreen = () =>(
  <Fragment>
    <Header />
    <RegisterPet />
  </Fragment>
)

export default RegisterPetScreen;