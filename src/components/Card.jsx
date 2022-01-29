import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

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
    <main>
      <section>
        <div>
          <h1>{ cardName }</h1>
          <span>{ cardRare }</span>
        </div>
        <div>
          <img src={ cardImage } alt={ cardName } />
          <span>{ cardTrunfo && 'Trunfo' }</span>
        </div>
        <p>{ cardDescription }</p>
        <div>
          <span>{ cardAttr1 }</span>
          <span>{ cardAttr2 }</span>
          <span>{ cardAttr3 }</span>
        </div>
      </section>
    </main>
  );
}

export default Card;
