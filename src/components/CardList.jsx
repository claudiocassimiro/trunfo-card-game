import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function CardList() {
  const { deck, setDeck, setHasTrunfo, setCardTrunfo } = useContext(AppContext);

  const removeCard = (index) => {
    const newDeck = deck.filter((card, i) => {
      if (card.cardTrunfo === true && i === index) {
        setHasTrunfo(false);
        setCardTrunfo(false);
        return false;
      }

      return i !== index;
    });
    setDeck(newDeck);
  };

  return (
    deck.length > 0 && (
      deck.map((card, index) => (
        <div key={ index }>
          <main>
            <section>
              <div>
                <h1>{ card.cardName }</h1>
                <span>{ card.cardRare }</span>
              </div>
              <div>
                <img src={ card.cardImage } alt={ card.cardName } />
                <span>{ card.cardTrunfo && 'Trunfo' }</span>
              </div>
              <p>{ card.cardDescription }</p>
              <div>
                <span>{ card.cardAttr1 }</span>
                <span>{ card.cardAttr2 }</span>
                <span>{ card.cardAttr3 }</span>
              </div>
            </section>
          </main>
          <button
            type="button"
            onClick={ () => removeCard(index) }
          >
            Excluir
          </button>
        </div>
      ))
    )
  );
}

export default CardList;
