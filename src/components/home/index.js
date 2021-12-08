import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Column, Container, Field, Icon, Image, Input, Section, Title } from "rbx";
import React, { Fragment } from "react";
import LoginImage from '../../assets/images/login.png';
import '../../styles/home.scss'



function Home() {
  return(    
    <Section className="hero is-success  is-fullheight">
      <Container className="has-text-centered">
        <Column classaName="is-4 is-offset-4">
          <Title  className="subtitle has-text-black" >
            <Icon>
              <FontAwesomeIcon icon={faSignInAlt} />
            </Icon>
            Por favor, entre com seu login
          </Title>          
            <Box className="box">
              <Image.Container>
                <Image src={LoginImage}  />
              </Image.Container>        
             
                <Field>
                  <Input className="input is-medium" type="text" placeholder="Crmv" />
                </Field>
                <Field>
                  <Input className="input is-medium" type="password" placeholder="Password" />
                </Field>
                <Button className="button is-block is-info is-medium is-fullwidth">Login</Button>
              
              <p className="has-text-grey">Cadastrar</p>
          </Box>
        </Column>
      </Container>
    
    </Section>

    
  )
}

export default Home;