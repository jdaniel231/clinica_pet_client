import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import UsersService from "../../../services/users";


function RegisterForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [crmv, setCrmv] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.register({name: name,email: email,crmv: crmv, password: password});
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  }


  if(redirectToLogin)
    return <Redirect to={{pathname: "/"}}/>

  return(
    <Fragment>
      <Column.Group centered >
        <form onSubmit={HandleSubmit}>
        <Column>
          <Field>
            <Label size="medium"> Nome: </Label>
            <Control>
              <Input 
                type="text" 
                value={name}
                onChange={ e => setName(e.target.value)}
                required
                className="input is-medium" 
              />
            </Control>
          </Field>
          <Field>
            <Label size="medium"> Crmv: </Label>
            <Control>
              <Input 
                type="text" 
                value={crmv}
                onChange={ e => setCrmv(e.target.value)}
                required
                className="input is-medium" 
              />
            </Control>
          </Field>
          <Field>
            <Label size="medium"> Email: </Label>
            <Control>
              <Input 
                type="email" 
                value={email}
                onChange={ e => setEmail(e.target.value)}
                required
                className="input is-medium" 
              />
            </Control>
          </Field>
            <Field>
            <Label size="medium"> Senha: </Label>
            <Control>
              <Input 
              type="password" 
              value={password}
              onChange={ e => setPassword(e.target.value)}
              required
              className="input is-medium" 
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <Column.Group breakpoint="mobile">
                <Column>
                  <a onClick={e => setRedirectToLogin(true)} className="has-text-grey" >Voltar</a>
                </Column>
                <Column>
                  <Button  className="button is-block is-info is-medium is-fullwidth">Registrar</Button>
                </Column>
              </Column.Group>
            </Control>
          </Field>
          { error && <Help color="danger">Cadastro invalido</Help>}
        </Column>
        </form>
      </Column.Group>
  </Fragment>
  )
}

export default RegisterForm;