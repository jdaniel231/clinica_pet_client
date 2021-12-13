import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Column, Control, Container, Field, Icon, Image, Input, Label, Section, Title } from "rbx";
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import LoginImage from '../../assets/images/login.png';
import '../../styles/home.scss'
import UsersService from '../../services/users'

function Home() {

  const [ crmv, setCrmv ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ redirectToRegister, setRedirectToRegister ] = useState(false);
  const [ redirectToPets, setRedirectToPets ] = useState(false);
  const [ error, setError ] = useState(false);

  if(redirectToRegister == true)
    return <Redirect to={{pathname: "/register"}}/>
  else if(redirectToPets == true)
    return <Redirect to={{pathname: "/pets"}}/>

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.login({ crmv: crmv, password: password});
      setRedirectToPets(true)
    } catch (error) {
      setError(true)
    }
  }
  

  return(   
    <Fragment> 
      <Section size="small" className="hero is-success is-fullheight">      
        <Container className="has-text-centered">
        <form onSubmit={handleSubmit}>
          <Column>   
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
                    <Input 
                      className="input is-medium" 
                      type="text" 
                      placeholder="Crmv" 
                      onChange={e => setCrmv(e.target.value)}
                      required
                      name="crmv" 
                    />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Input 
                      className="input is-medium" 
                      type="password" 
                      placeholder="Password" 
                      onChange={ e => setPassword(e.target.value)}
                      required
                      name="password"
                    />
                  </Control>
                </Field>
                <Button className="button is-block is-info is-medium is-fullwidth">Login</Button>          
            </Box>
            <p className="has-text-grey">
              {/* <Link to="/register">Cadastro</Link>&nbsp;·&nbsp; */}
              <a onClick={ e => setRedirectToRegister(true)}>Cadastro</a>&nbsp;·&nbsp;
              <a href="#">Contato</a>
            </p>
          </Column>
          </form>
        </Container>
        
      </Section>
    </Fragment>
    
  )
}

export default Home;