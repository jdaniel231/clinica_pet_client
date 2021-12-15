import { Column, Hero, Section, Title, Container, Icon, Tile, Card} from 'rbx';
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SearchPet from '../../pets/search';
import '../../../styles/dashboard/header.scss'

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
                <Tile className="tile is-child box">
                  <Title className="title">236</Title>
                  <Title className="subtitle">Atendimentos</Title>
                </Tile>
              </Tile>
                <Tile className="column tile is-parent">
                  <Tile className="tile is-child box">
                    <Title className="title">236</Title>
                    <Title className="subtitle">Cadastro</Title>
                  </Tile>
                </Tile>
            </Tile>
          </Tile>

          <Column.Group className="columns">
            <Column className="column is-6">
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
                  Historico da consultas
                  Historico da consultas
                  Historico da consultas
                  Historico da consultas
                  Historico da consultas
                </Card>

              </Card>
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