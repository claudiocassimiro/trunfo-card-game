import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Main, { Section, Article, Header, ContainerImage, Img, TargetTrunfo, P, ContainerAtribute } from './styles/CardStyle';
import logoSuperTrivia from '../img/super_trunfo.png';

function Card() {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = useContext(AppContext);

  return (
    <Main>
      <Section>
        <Article>
          <Header>
            <h1>{ cardName }</h1>
            <span>{ cardRare }</span>
          </Header>
          <ContainerImage>
            <Img src={ cardImage } alt={ cardName } />
            { cardTrunfo && <TargetTrunfo src={logoSuperTrivia} alt="superTrunfo"/> }
          </ContainerImage>
          <P>{ cardDescription }</P>
          <ContainerAtribute>
            <span>Atributo 1</span>
            <span>{ cardAttr1 }</span>
            <span>Atributo 2</span>
            <span>{ cardAttr2 }</span>
            <span>Atributo 3</span>
            <span>{ cardAttr3 }</span>
          </ContainerAtribute>
        </Article>
      </Section>
    </Main>
  );
}

export default Card;
