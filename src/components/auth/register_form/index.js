import { Button, Column, Control, Field, Input, Label } from "rbx";
import React, { Fragment } from "react";

function RegisterForm() {

  return(
    <Fragment>
      <Column.Group centered >
        <Column>
          <Field>
            <Label size="medium"> Nome: </Label>
            <Control>
              <Input type="text" className="input is-medium" />
            </Control>
          </Field>
          <Field>
            <Label size="medium"> Crmv: </Label>
            <Control>
              <Input type="text" />
            </Control>
          </Field>
          <Field>
            <Label size="medium"> Email: </Label>
            <Control>
              <Input type="email" />
            </Control>
          </Field>
            <Field>
            <Label size="medium"> Senha: </Label>
            <Control>
              <Input type="password" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Column.Group breakpoint="mobile">
                <Column>
                  <a href="#" className="has-text-grey" >Voltar</a>
                </Column>
                <Column>
                  <Button  className="button is-block is-info is-medium is-fullwidth">Registrar</Button>
                </Column>
              </Column.Group>
            </Control>
          </Field>
        </Column>
      </Column.Group>
  </Fragment>
  )
}

export default RegisterForm;