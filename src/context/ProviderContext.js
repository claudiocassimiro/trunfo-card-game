import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const ProviderContext = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardAttr1, setCardAttr1] = useState('');
  const [cardAttr2, setCardAttr2] = useState('');
  const [cardAttr3, setCardAttr3] = useState('');
  const [cardImage, setCardImage] = useState('');
  const [cardRare, setCardRare] = useState('normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
    case 'cardName':
      setCardName(value);
      break;
    case 'cardDescription':
      setCardDescription(value);
      break;
    case 'cardAttr1':
      setCardAttr1(value);
      break;
    case 'cardAttr2':
      setCardAttr2(value);
      break;
    case 'cardAttr3':
      setCardAttr3(value);
      break;
    case 'cardImage':
      setCardImage(value);
      break;
    case 'cardRare':
      setCardRare(value);
      break;
    case 'cardTrunfo':
      if (value === 'on') {
        setCardTrunfo(true);
        setHasTrunfo(true);
      }
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    if (cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0 && cardAttr1 > 0 && cardAttr2 > 0 && cardAttr3 > 0 && cardAttr1 <= 90 && cardAttr2 <= 90 && cardAttr3 <= 90) {
      setIsSaveButtonDisabled(false);
    } else {
      setIsSaveButtonDisabled(true);
    }
  }, [cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3]);

  const onSaveButtonClick = () => {
    const card = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    setDeck([...deck, card]);
    setCardName('');
    setCardDescription('');
    setCardAttr1('');
    setCardAttr2('');
    setCardAttr3('');
    setCardImage('');
    setCardRare('normal');
  };

  const state = {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    hasTrunfo,
    isSaveButtonDisabled,
    deck,
    onInputChange,
    onSaveButtonClick,
  };

  return (
    <AppContext.Provider value={ state }>
      {children}
    </AppContext.Provider>
  );
};

ProviderContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProviderContext;
