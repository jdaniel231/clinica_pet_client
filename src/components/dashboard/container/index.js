import { Column, Hero, Section, Title, Container, Icon, Tile, Card} from 'rbx';
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SearchPet from '../../pets/search';
import '../../../styles/dashboard/header.scss'
import ListPet from '../../pets/list';

function Contanier(props) {
  return(
    <div className="container">
      <Column.Group className="columns"  >
        <Column className="column ">
          <Hero className="is-info welcome is-small"> 
            <Hero.Body className="hero-body">
              <Container className="container">
                <Title className="title is-3 has-text-centered">Bem-vindo Dr(a). Wanessa Campos</Title>
              </Container>
            </Hero.Body>
          </Hero>

          <Tile className="info-tiles ">
            <Tile class="tile is-ancestor has-text-centered ">
              <Tile className="column tile is-parent">
                <Tile className="tile is-child box atendimento">
                  <Title className="title">236</Title>
                  <Title className="subtitle">Atendimentos Hoje</Title>
                </Tile>
              </Tile>
                <Tile className="column tile is-parent">
                  <Tile className="tile is-child box atendimento-total">
                    <Title className="title">236</Title>
                    <Title className="subtitle">Total de atendimentos</Title>
                  </Tile>
                </Tile>
            </Tile>
          </Tile>

          <Column.Group className="columns">
            <Column className="column is-6">
             <ListPet />
                
            </Column>

            <Column className="column is-6">
              <SearchPet />
            </Column>
          </Column.Group>
        </Column>
      </Column.Group>
    </div>      
  )
}

export default Contanier;