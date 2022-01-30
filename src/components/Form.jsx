import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Main, { FormStyle, Input, LabelCheck, CheckBoxInput, TextArea } from './styles/FormStyle';

function Form() {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    isSaveButtonDisabled,
    onInputChange,
    onSaveButtonClick,
    hasTrunfo,
  } = useContext(AppContext);

  return (
    <Main>
      <FormStyle onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="card-name">
          <Input
            type="text"
            id="card-name"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ (e) => onInputChange(e) }
            placeholder="Insira o nome da carta"
          />
        </label>
        <label htmlFor="card-description">
          <TextArea
            id="card-description"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            rows="6"
            onChange={ (e) => onInputChange(e) }
            placeholder="Insira a descrição da carta"
          />
        </label>
        <label htmlFor="card-attr1">
          <Input
            type="number"
            id="card-attr1"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            min="0"
            max="90"
            onChange={ (e) => onInputChange(e) }
            placeholder="Insira o 1° atributo"
          />
        </label>
        <label htmlFor="card-attr2">
          <Input
            type="number"
            id="card-attr2"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            min="0"
            max="90"
            onChange={ (e) => onInputChange(e) }
            placeholder="Insira o 2° atributo"
          />
        </label>
        <label htmlFor="card-attr3">
          <Input
            type="number"
            id="card-attr3"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            min="0"
            max="90"
            onChange={ (e) => onInputChange(e) }
            placeholder="Insira o 3° atributo"
          />
        </label>
        <label htmlFor="image-path">
          <Input
            type="text"
            id="image-path"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ (e) => onInputChange(e) }
            placeholder="Insira o caminho da imagem"
          />
        </label>
        <label htmlFor="card-type">
          <select
            id="card-type"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ (e) => onInputChange(e) }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo === false ? (
          <LabelCheck htmlFor="card-super">
            <CheckBoxInput
              type="checkbox"
              id="card-super"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ (e) => onInputChange(e) }
            />
            Esse card é super?
          </LabelCheck>
        ) : <span>Você já tem um Super Trunfo em seu baralho</span>}
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ (e) => onSaveButtonClick(e) }
          data-testid="save-button"
        >
          Salvar
        </button>
      </FormStyle>
    </Main>
  );
}

export default Form;
