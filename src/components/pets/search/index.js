import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Content, Control, Icon, Input } from 'rbx';
import React from 'react';

function SearchPet(props) {

  return (
    <Card>
      <Card.Header>
        <Card.Header.Title >
          Pesquisa
          <Icon className="is-right">
            <FontAwesomeIcon icon={faSortDown} /> 
          </Icon>          
        </Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Content>
          <Control className=" has-icons-left has-icons-right" >
            <Input className="is-medium" type="text" />
            <Icon className="is-medium is-right">
              <FontAwesomeIcon icon={faSearch} />
            </Icon>           
          </Control>
        </Content>        
      </Card.Content>
    </Card>
  )
}

export default SearchPet;