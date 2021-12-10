import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Column, Control, Container, Field, Icon, Image, Input, Label, Section, Title } from "rbx";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginImage from '../../assets/images/login.png';
import '../../styles/home.scss'



function Home() {
  

  return(   
    <Fragment className="html-body"> 
      <Section size="small" className="hero is-success is-fullheight">
        <Container className="has-text-centered">
          <Column classaName="is-4 is-offset-4">   
            <Title  className="subtitle has-text-black" >
              <Icon>
                <FontAwesomeIcon className="fa" icon={faSignInAlt} />
              </Icon>
              Por favor, entre com seu login
            </Title>                
              <Box className="box">                
                <Image.Container className="avatar" size={128}>
                  <Image src={LoginImage}  />
                </Image.Container>
                <Field>
                  <Control>
                    <Input className="input is-medium" type="text" placeholder="Crmv" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Input className="input is-medium" type="password" placeholder="Password" />
                  </Control>
                </Field>
                <Button className="button is-block is-info is-medium is-fullwidth">Login</Button>          
            </Box>
            <p className="has-text-grey">
              <a href="#">Contato</a>
            </p>
          </Column>
        </Container>
      
      </Section>
    </Fragment>
    
  )
}

export default Home;