import { faAngleDown, faSearch, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Icon, Table } from 'rbx';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function ListPet (props) {
  const [registerPet, setResgiterPet] = useState(false)

  if(registerPet == true)
    return <Redirect to={{pathname: "/pets/register"}}/>
 
  return(
    <Card className="card events-card">
      <Card.Header>
        <Card.Header.Title>
          Pacientes
        </Card.Header.Title>
        <Card.Header.Icon>
          <Icon className="icon">
            <a onClick={ e => setResgiterPet(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </Icon>
        </Card.Header.Icon>     
        <Card.Header.Icon>
          <Icon className="icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
        </Card.Header.Icon>              
      </Card.Header>

      <Card className="card-table">
       <Card.Content>
          <Table className="is-fullwidth is-striped">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Lorum ipsum dolem aire
                </Table.Cell>
                <Table.Cell className="level-right">
                  <Button inverted className="button is-small is-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                  <Button  inverted className="button is-small is-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
       </Card.Content>
      </Card>

  </Card>
  )
}

export default ListPet;