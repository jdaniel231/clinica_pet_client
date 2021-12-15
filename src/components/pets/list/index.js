import { faAngleDown, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Icon, Table } from 'rbx';
import React from 'react';

function ListPet (props) {
  return(
    <Card className="card events-card">
      <Card.Header>
        <Card.Header.Title>
          Consultas
        </Card.Header.Title>    
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