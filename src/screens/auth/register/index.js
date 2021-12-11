import { Box, Column, Container, Section, Title } from 'rbx';
import React, { Fragment } from 'react';
import RegisterForm from '../../../components/auth/register_form';
import '../../../styles/auth.scss'

const RegisterScreen = () =>(
  <Fragment>
    <Section className="hero is-success is-fullheight">
      <Container>
        <Column className="is-12">
          <Title  className="subtitle has-text-black" >
              Cadastro
            </Title>      
            <Box className="auth">
              <RegisterForm />
            </Box>
        </Column>
      </Container>

    </Section>
  </Fragment>
)

export default RegisterScreen;